import {prodm} from './prods.js';
import {cart,addToCart,updateCart} from './cart.js';
    let productsHTML='';
    prodm.forEach((produc)=>{
        const html=`<div class="item">
            <div class="item-preview">
                <img src="${produc.image}">
            </div>
            <div class="item-info">
               <p class="item-title"> ${produc.name}</p>
               <p class="item-stats">Rs:${produc.stat}</p>
            </div>
            
            <button class="add" data-prod-id="${produc.id}" data-prod-image="${produc.image}">Add to cart</button>
    </div>`;
    productsHTML=productsHTML+html;
    });
    document.querySelector('.items').innerHTML=productsHTML;
    
  
    document.querySelectorAll('.add').forEach((button)=>{
        button.addEventListener('click',()=>{
            //console.log(button.dataset);
            const prodId=button.dataset.prodId;
           
            addToCart(prodId);
            updateCart();
        });
    });
    //updateCart();
