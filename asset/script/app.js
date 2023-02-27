class product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ElementAttributes{
  constructor(attrName,attrValue){
    this.attrName = attrName;
    this.attrValue = attrValue;
  }
}

class Component{
  constructor(renderHookId, shouldRender = true){
    this.hookId = renderHookId;
    if(shouldRender){
      this.render();
    }
  }
  render(){}
  createRootElement(tag, cssClass, attributes){
    const rootElement = document.createElement(tag);
    if(cssClass){
      rootElement.className = cssClass;
    }
    if(attributes&&attributes.length>0){
      for(const attr of attributes){
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class shoppingCart extends Component {
  items = [];
  set cartItems(value){
    this.items = value;
    this.totalOutput.innerHTML = `<h2>total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }
  get totalAmount(){
    const sum = this.items.reduce((preValue, curItem)=>{
      return preValue + curItem.price;
    },0);
    return sum;
  }

  constructor(renderHookId){
    super(renderHookId, false);
    this.orderProducts = () => {
      console.log('Ordering...');
      console.log(this.items);
    }
    this.render();
  }

  addProduct(product) {
    const updatedItem = [...this.items];
    updatedItem.push(product);
    this.cartItems = updatedItem;
  }


  render() {
    const cartEl = this.createRootElement('section','cart');
    cartEl.innerHTML = `<h2>total: \$${0}</h2>
    <button>Order Now!</button>`;
    const orderButton = document.querySelector('button');
    orderButton.addEventListener('click', this.orderProducts);
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class productItem extends Component{
  constructor(product, renderHookId) {
    super(renderHookId,false);
    this.product = product;
    this.render();
  }
  addToCart() {
    App.addProductToCart(this.product);
  }
  render() {
    const prodEl = this.createRootElement("li",'product-item');
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
    const addCardBtn = document.querySelector("button");
    addCardBtn.addEventListener("click", this.addToCart.bind(this));
    
  }
}

class productList extends Component{
  #products = [];
  constructor(renderHookId) {
    super(renderHookId,false);
    this.render();
    this.fetchProduct();
  }

  fetchProduct(){
    this.#products = [new product(
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
    )];
  }

  renderProducts(){
    for (const prod of this.#products) {
      new productItem(prod,'prod-list');
    }
  }

  render() {
     this.createRootElement("ul",'product-list',[new ElementAttributes('id', 'prod-list')]);
    if(this.#products && this.#products.length>0){
      this.renderProducts();
    }
  }
}

class Shop {
  constructor(){
    this.render();
  }
  render() {
    this.cart = new shoppingCart('app');
    new productList('app');
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }
  static addProductToCart(product){
    this.cart.addProduct(product);
  }
}

App.init();
