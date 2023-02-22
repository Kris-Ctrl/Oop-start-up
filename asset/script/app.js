
const productList = {products: [{title: 'A pillow', imageUrl: 'https://images.app.goo.gl/nhBSQwv9Ju2sZ17P7', price: 19.99, description:'A soft pillow'},
{title: 'A carpet', imageUrl: 'https://images.app.goo.gl/LeLHJTcrEnYPpP2E7', price: 89.99, description:'A carpet'}],
render(){
  const renderHook = document.getElementById('app');
  const prodList = document.createElement('ul');
  prodList.className = 'product-list';
  for(const prod of this.products){
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
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
  renderHook.append();
}}