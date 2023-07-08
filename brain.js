var valcode = document.querySelector("#discount")
var namecode = document.querySelector("#code")
namecode.textContent = valcode.value

var closeBtn = document.querySelector(".close")
var couponCode = document.querySelector(".couponCode")
closeBtn.addEventListener("click", function () {
close()
})
valcode.addEventListener("change", function () {
checkDiscountCoupon()
})

function checkDiscountCoupon() {
if (valcode.value.length === 0) {
// namecode.style.display = "none"
close()
}
else {
couponCode.classList.remove("d-none")
namecode.style.display = "inline"
namecode.textContent = valcode.value
}
}

function close() {
couponCode.classList.add("d-none")
valcode.value = ""
}

document.getElementById("more").style.display="none"
document.getElementById("mores").style.display="none"

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");


    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Know more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Know less"; 
      moreText.style.display = "inline";
    }
  }

function mysecondFunction() {
    var dotss = document.getElementById("dotss");
    var moreTexts = document.getElementById("mores");
    var btnTexts = document.getElementById("myBtns");


    if (dotss.style.display === "none") {
      dotss.style.display = "inline";
      btnTexts.innerHTML = "Know more"; 
      moreTexts.style.display = "none";
    } else {
      dotss.style.display = "none";
      btnTexts.innerHTML = "Know less"; 
      moreTexts.style.display = "inline";
    }
  }
  
  