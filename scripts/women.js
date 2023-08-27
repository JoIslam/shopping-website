import {prodw} from './prods.js';
import {addToCart,updateCart} from './cart.js';
    

     let productwHTML='';
    prodw.forEach((produc)=>{
        const html=`<div class="item">
            <div class="item-preview">
                <img src="${produc.image}">
            </div>
            <div class="item-info">
               <p class="item-title"> ${produc.name}</p>
               <p class="item-stats">Rs:${produc.stat}</p>
            </div>
            
            <button class="addw" data-prod-id="${produc.id}" data-prod-image="${produc.image}">Add to cart</button>
    </div>`;
    productwHTML=productwHTML+html;
    });
    document.querySelector('.itemw').innerHTML=productwHTML;
    document.querySelectorAll('.addw').forEach((button)=>{
        button.addEventListener('click',()=>{
            //console.log(button.dataset);
            const prodId=button.dataset.prodId;
           
            addToCart(prodId);
            updateCart();
        });
    });
   updateCart();