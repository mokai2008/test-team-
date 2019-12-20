var myItems = Array.from(document.getElementsByClassName("img-fluid"));
var myBigBox = document.getElementById("bigBox");
for (var i = 0; i < myItems.length; i++) {
  myItems[i].addEventListener("click", function (e) {
    myBigBox.style.display = "flex";
    var mySrc = e.target.src;
    $("#bigBox").children().css("background- image", "url(" + mySrc + ")")
  })
}