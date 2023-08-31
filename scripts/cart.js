export let cart=JSON.parse(localStorage.getItem('cart'));
//export let cart=[];
if(!cart){
	cart=[];
}
export function addToCart(prdctId){
	let matchingItem;
	cart.forEach((kart)=>{
		if(prdctId===kart.prodId){
			matchingItem=kart;
		}
	});
	if(matchingItem){
		matchingItem.quantity+=1;
	}
	else{
	     cart.push({prodId:prdctId,quantity:1});	
	}
	
	localStorage.setItem('cart',JSON.stringify(cart));
} 

export function removeFromCart(producId){
  const newCart=[];
  cart.forEach((cartItem)=>{
    if(cartItem.prodId!==producId){
      newCart.push(cartItem);
    }
  });
  cart=newCart;
  localStorage.setItem('cart',JSON.stringify(cart));
}


export function updateCart(){
      let cartQuantity=0;
      cart.forEach((carts)=>{
        cartQuantity+=carts.quantity;
      });
      document.querySelector('.number').innerHTML='Cart'+'('+cartQuantity+')';
}

export function orderItem(){
  let cart=[];
  localStorage.setItem('cart',JSON.stringify(cart));
}
