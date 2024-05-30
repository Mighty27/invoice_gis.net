const mediaCapture = document.getElementById("mediaCanvas");
const captureButton = document.getElementById("capture-button");
var captureButtonStyle = document.getElementById("capture-button");
const previewCapture = document.getElementById("preview-capture");
const downloadButton = document.getElementById("download-button");
const printButton = document.getElementById("print-button");
const closeButton = document.getElementById("close-button");
var element = document.getElementById("cover");
const gisButton = document.getElementById("gis");
const smcButton = document.getElementById("smc");
var logoImage = document.getElementById("logo-img");
var companyName = document.getElementById("company-name");
var tagLine = document.getElementById("tag-line");



captureButton.addEventListener("click", async () => {
    captureButtonStyle.classList.add("invisible");
    mediaCapture.style.border = "unset";
    var element = jQuery("#mediaCanvas")[0];
    html2canvas($(element)[0], {
        scale:2
        }).then(function(canvas) {
        const imgURL = canvas.toDataURL();
        previewCapture.innerHTML = "<img id='Image' src=" + imgURL + " style='width:1000px!important;'></img>";
        downloadButton.href = imgURL;
        downloadButton.download = "image.png"
        });

    printButton.addEventListener("click", ()=> {
        var element = jQuery("#mediaCanvas")[0];
        html2canvas($(element)[0], {
            scale:3
          }).then(function(canvas) {
            var myImage = canvas.toDataURL("image/png");
            var tWindow = window.open("");
            $(tWindow.document.body).html("<img id='Image' src=" + myImage + " style='width:720px;'></img>").ready(function() {
              tWindow.focus();
              tWindow.print();
            });
          });
        
    });
    


});


closeButton.addEventListener("click", async () => {
    mediaCapture.style.border = "1px #D3D3D3 solid";
    captureButtonStyle.classList.remove("invisible");
});

gisButton.addEventListener("click", async () => {
    smcButton.classList.remove("active");
    smcButton.classList.add("text-white");
    gisButton.classList.add("active");
    gisButton.classList.remove("text-white");
    logoImage.src='img/LOGO GIS × SMC (Dark Version).png';
    companyName.textContent="CV. GRISLIN INTERNET SOLUTION";
});

smcButton.addEventListener("click", async () => {
    smcButton.classList.add("active");
    smcButton.classList.remove("text-white");
    gisButton.classList.add("text-white");
    gisButton.classList.remove("active");
    logoImage.src='img/Logo SMC.png'
    companyName.textContent="PT. Serayu Multi connection";
});
