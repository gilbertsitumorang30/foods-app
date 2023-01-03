class ProdukItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: "open" });
  }

  set produk(produk) {
    this._produk = produk;
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
    <style>
    *{
        margin: 0;
        padding: 0;
        
    }

    .produk-card{
        height:360px;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
        box-sizing: border-box;
        min-width: 285px;
    }

    .image-container{
        height: 145px;
    }

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .nama{
        font-size: 18px;
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 285px;
    }

    .deskripsi{
        font-size: 16px;
        font-weight: normal;
    }

    .tombol-detail{
        width: 140px;
        height: 32px;
        font-size: 16px;
        font-weight: bold;
        background-color: #EF9A53;
        display: flex;
        color: #fff;
        border-radius: 4px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .tombol-detail:hover{
        font-size: 18px;
    }

    .keterangan{
        margin-top: 18px;
        padding: 0 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 12px;
    }
   
    </style>

    <div class="produk-card">
    <div class="image-container">
    <img src="${this._produk.strMealThumb}" />
   <div class="keterangan">
   <p class="nama">${this._produk.strMeal}</p>
   <p class="deskripsi">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque expedita atque excepturi.</p>
   <div class="tombol-detail">Detail</div>
   </div>
    </div>
    </div>`;
  }
}

customElements.define("produk-item", ProdukItem);
