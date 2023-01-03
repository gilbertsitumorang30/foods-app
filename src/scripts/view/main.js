import DataSource from '../data/data-source';
import '../components/produk-list.js';
import '../components/search-list.js';

const main = () => {
  const produkListElement = document.querySelector('produk-list');
  const searchListElement = document.querySelector('search-list');
  const searchInput = document.querySelector('#search-input');
  const searchModal = document.querySelector('#search-modal');
  const closeModal = document.querySelector('.cancel-button');

  const onChangeSearchModal = () => {
    const keyword = searchModal.value;
    DataSource.searchFood(keyword).then(renderSearch).catch(renderError);
  };

  const onFilterClicked = (kategori) => {
    DataSource.getListFood(kategori).then(renderkategori);
  };

  const kategori = document.querySelector('.filter-container');

  const renderkategori = (res) => {
    produkListElement.produks = res;
  };

  const renderError = (message) => {
    searchListElement.renderError(message);
  };

  const renderSearch = (res) => {
    searchListElement.searchs = res;
  };

  const modal = document.getElementById('myModal');
  searchModal.addEventListener('input', () => {
    onChangeSearchModal();
  });

  searchInput.addEventListener('focus', () => {
    modal.style.display = 'block';
    searchModal.focus();
  });
  window.addEventListener('click', (e) => {
    if (e.target == modal || e.target == closeModal) {
      modal.style.display = 'none';
    }
  });

  onFilterClicked('beef');
  kategori.addEventListener('click', (e) => {
    if (e.target.innerHTML !== 'Kategori') {
      const kategori = e.target.innerHTML;
      onFilterClicked(kategori);
    }
  });
};

export default main;
