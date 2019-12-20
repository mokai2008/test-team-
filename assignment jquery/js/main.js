$(document).ready(function () {
  $("#load").fadeOut(1000, function () {
    $("body").css("overflow", "auto")
  })
  let myDuration = $("#Duration").offset().top - 80;
  $(window).scroll(function () {
    let myWindowScroll = $(window).scrollTop();
    if (myWindowScroll > myDuration) {
      $("#open").css({ color: "#111" })
      console.log("ok")
    } else {
      $("#open").css({ color: "#fff" })

    }
  })
})
/********************************************* */
var myClose = document.getElementById("close");
var myOpen = document.getElementById("open");
myClose.addEventListener("click", closeNav);
myOpen.addEventListener("click", openNav);
/***************************** */
function closeNav() {
  document.getElementById("nav").style.width = "0";
}
/********************************** */
function openNav() {
  document.getElementById("nav").style.width = "250px";
  document.getElementById("nav").style.display = "flex";
}
/**************************** */
$(".disc").first().css("display", "block");
$(".acord").click(function () {
  $(this).next().slideToggle(1000);
  $(".disc").not($(this).next()).slideUp(500);
})


/************************** */
$("nav ul li a").click(function () {
  let myHref = $(this).attr("href");
  $("html,body").animate({ scrollTop: $(myHref).offset().top }, 1000)
})


/******************************** */
var countDownDate = new Date("December 1, 2020 10:37:25").getTime();

var myTimer = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("days").innerHTML = days + " D";
  document.getElementById("hours").innerHTML = hours + " H"
  document.getElementById("min").innerHTML = minutes + " M"
  document.getElementById("sec").innerHTML = seconds + " S"
  
  if (distance < 0) {
    clearInterval(myTimer);
    document.getElementById("days").innerHTML = "EXPIRED"
    document.getElementById("hours").innerHTML = "EXPIRED"
    document.getElementById("min").innerHTML = "EXPIRED"
    document.getElementById("sec").innerHTML = "EXPIRED";
  }
}, 1000);



/************* */
var myTextArea = $("#exampleFormControlTextarea1").attr("maxlength");

$("#myCount").text(myTextArea);

$("#exampleFormControlTextarea1").keyup(function () {
  var textLength = $(this).val().length;
  var min = myTextArea - textLength;
  $("#myCount").text(min);

})
