class SearchItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: "open" });
  }

  set search(search) {
    this._search = search;
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
    <style>
    *{
        margin: 0;
        padding: 0;
    }
    .item{
     height: 120px; 
     display: flex;
     box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
     border-radius: 4px;
     over-flow: hidden;
     padding :12px;
     gap: 16px;
     cursor: pointer;
    }

    img{
        border-radius: 4px;
        height: 100%;
    }

    .deskripsi{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .nama{
        font-weight: bold;
    }
    </style>

    <div class="item">
    <img src="${this._search.strMealThumb}" alt="item" >
    
    <div class="deskripsi">
    <p class="nama">${this._search.strMeal}</p>
    <p>Kategori : ${this._search.strCategory}</p>
    <p>Asal : ${this._search.strArea}</p>
    </div>
    </div>
    `;
  }
}

customElements.define("search-item", SearchItem);
