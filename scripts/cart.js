export let cart=JSON.parse(localStorage.getItem('cart'));
//export let cart=[];
if(!cart){
	cart=[{prodId:'shirt3',quantity:1},
{prodId:'shirt4',quantity:1}];
}

export function addToCart(prodId){
      cart.push({prodId:prodId,quantity:1});
      localStorage.setItem('cart',JSON.stringify(cart));
    /*  let matchingItem;
      cart.forEach((kart)=>{
        if(prodId===kart.prodId){
          matchingItem=kart;
        }
      });
      if(matchingItem){
        matchingItem.quantity+=1;
      }
      else{
      	console.log(prodId);
        cart.push({prodId:prodId,quantity:1});

        document.querySelector('.cart-items').innerHTML=prodId;
      }
      sessionStorage.setItem('cart',JSON.stringify(cart));*/
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
  let cart=null;
  localStorage.setItem('cart',JSON.stringify(cart));

}
