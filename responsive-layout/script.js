window.addEventListener("resize", function () {
 const screenWidth = window.innerWidth;

 console.log("Lebar layar saat ini: " + screenWidth + "px");

 if (screenWidth <= 768) {
  console.log("Mode Mobile (Div bertumpuk vertikal)");
 } else {
  console.log("Mode Desktop Aktif (Div berjajar horizontal)");
 }
});
