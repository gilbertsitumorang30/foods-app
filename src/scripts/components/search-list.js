import './search-item.js';

class SearchList extends HTMLElement {
  set searchs(searchs) {
    this._searchs = searchs;
    this.render();
  }

  renderError(message) {
    this.innerHTML = `
    <style>
    .not-found{
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: bold;
        color : #333;
    }
    </style>
    <div class="not-found">${message}</div>
    `;
  }

  render() {
    this.innerHTML = '';
    this._searchs.forEach((search) => {
      const searchItemElement = document.createElement('search-item');
      console.log(search);
      searchItemElement.search = search;
      this.appendChild(searchItemElement);
    });
  }
}

customElements.define('search-list', SearchList);
