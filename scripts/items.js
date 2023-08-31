import {cart, orderItem, removeFromCart, updateCart} from './cart.js';
import {prodm,prodw,prode} from './prods.js';
import {updateItems} from './itemlist.js';

let total=0;
let cartHTML='';
cart.forEach((cartItem)=>{
	const productId=cartItem.prodId;
	//console.log(productId);
	let matchingProdCart;
	prodm.forEach((prdct)=>{
		if(prdct.id===productId){
			matchingProdCart=prdct;
		}
	
	});
	prodw.forEach((prdct)=>{
		if(prdct.id===productId){
			matchingProdCart=prdct;
		}
		
	});	//console.log(matchingProdCart.stat);
	prode.forEach((prdct)=>{
		if(prdct.id===productId){
			matchingProdCart=prdct;
		}
		
	});
	const html=`<div class="item">
	<div class="item-preview"> <img src=${matchingProdCart.image}></div>
	<div class="prod-name">${matchingProdCart.name}</div>
	<div class="prod-value">Rs:${matchingProdCart.stat}</div>
	<div class="quantity">Quantity:${cartItem.quantity}</div>
	<div class="delete" data-products-id=${matchingProdCart.id}>Delete</div>
	</div>`;
	cartHTML+=html;
	total=total+(matchingProdCart.stat)*(cartItem.quantity);
});
document.querySelector('.items').innerHTML=cartHTML;
document.querySelector('.val').innerHTML='The Final Bill Is: Rs: '+total;
if(total===0){
	const instruction='Add Item(s)';
	document.querySelector('.instruction').innerHTML=instruction;
}
else{
	const instruction=`<a href="order.html">Place Order</a>`;
	document.querySelector('.instruction').innerHTML=instruction;
	document.querySelectorAll('.instruction').forEach((ins)=>{
		ins.addEventListener('click',()=>{
			orderItem();
		});
	});
}
document.querySelectorAll('.delete').forEach((link)=>{
	link.addEventListener('click',()=>{
		//console.log(link.dataset);
		const productsId=link.dataset.productsId;
		removeFromCart(productsId);
		updateCart();
		updateItems();
	});
});
updateCart();
updateItems();
