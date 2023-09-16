    let total = 0;
    let promoAmount = 200;

// click to show card title in new div and sum of total price

  function card(target) {
    // Product Name Shower
    const selectedItemContainer = document.getElementById('product-name');
    const targetTitle = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = targetTitle;

    selectedItemContainer.appendChild(li).setAttribute('type', '1');
    selectedItemContainer.style.cssText =
      'color: black; font-size: 24px; padding: 5px 20px 5px; font-weight: 600';

    // Total Price Shower
    const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    total = parseInt(total) + parseInt(price);
    document.getElementById('total-price').innerText = total.toFixed(2);

    // couponbtn connect card
    couponbtn(target);
  }


  function toggleModal() {
    const myModal = document.getElementById('my_modal_1');
    if (myModal.open) {
      myModal.close();
    } else {
      myModal.showModal();
    }
  }

// coupon & discount & total

function couponbtn(target) {

    const couponCode =  target.childNodes[1].value;
    const couponBtn = target.childNodes[3];

    if(couponCode === "SELL200" && total >= promoAmount){
        const discountAmount = (total * 80) / 100;
        const discountPrice = total - discountAmount;
        document.getElementById('discount-price').innerText = discountPrice.toFixed(2);

        const totalPrice = total - discountPrice;
        document.getElementById('total').innerText = totalPrice.toFixed(2);
    }
    else{
        if(total >= promoAmount){
            couponBtn.disabled = false; 
        }
        else {
            couponBtn.disabled = true; 
        }
    }
}