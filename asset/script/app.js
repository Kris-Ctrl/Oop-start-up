class product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

const productList = {
  products: [
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
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
      <div>
         <img src=${prod.imageUrl} alt = ${prod.title}>
         <div class = 'product-item__content'>
           <h2>${prod.title}</h2>
           <h3>\$${prod.price}</h3>
           <p>${prod.description}</p>
         </div>
         <button>Add to cart</button>
      </div>
    `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
