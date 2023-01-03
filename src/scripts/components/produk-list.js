import './produk-item.js';

class ProdukList extends HTMLElement {
  set produks(produks) {
    this._produks = produks;
    this.render();
  }

  render() {
    this.innerHTML = '';

    this._produks.forEach((produk) => {
      const produkItemElement = document.createElement('produk-item');
      produkItemElement.produk = produk;
      this.appendChild(produkItemElement);
    });
  }
}

customElements.define('produk-list', ProdukList);
