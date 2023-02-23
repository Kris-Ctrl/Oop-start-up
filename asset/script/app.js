class product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}


class productItem{
  constructor(product){
    this.product = product;
  }
  addToCart(){
    console.log('Adding product to cart...');
    console.log(this.product);
  }

  render(){
    const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
      <div>
         <img src=${this.product.imageUrl} alt = ${this.product.title}>
         <div class = 'product-item__content'>
           <h2>${this.product.title}</h2>
           <h3>\$${this.product.price}</h3>
           <p>${this.product.description}</p>
         </div>
         <button>Add to cart</button>
      </div>
    `;
    const addCardBtn = document.querySelector('button');
    addCardBtn.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}


class productList{
  products= [
    new product(
      "A pillow",
      "C:Users\11143DesktopWeChat Image_20230219213249.jpg",
      "A soft pillow",
      19.99
    ),
    new product(
      "A carpet",
      "C:Users\11143DesktopWeChat Image_20230219213249.jpg",
      "A carpet",
      89.99
    ),
  ];
  constructor(){}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const product = new productItem(prod);
      const prodEl = product.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  };
}


const productList = new productList();
productList.render();
