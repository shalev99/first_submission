var coupon=document.getElementById("first_button");


coupon.onclick=change_inner;




function change_inner() {
    coupon.innerHTML="<i>coupon sent!</i>";
    coupon.style.backgroundColor="gray";
    
}