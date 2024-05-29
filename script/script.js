const mediaCapture = document.getElementById("mediaCanvas");
const captureButton = document.getElementById("capture-button");
var captureButtonStyle = document.getElementById("capture-button");
const previewCapture = document.getElementById("preview-capture");
const downloadButton = document.getElementById("download-button");
const closeButton = document.getElementById("close-button");
var element = document.getElementById("cover");
const gisButton = document.getElementById("gis");
const smcButton = document.getElementById("smc");
var logoImage = document.getElementById("logo-img");
var companyName = document.getElementById("company-name");
var tagLine = document.getElementById("tag-line");



captureButton.addEventListener("click", async () => {
    captureButtonStyle.classList.add("invisible");
    element.style.justifyContent = "unset";
    const canvas = await html2canvas(mediaCapture);
    const imgURL = canvas.toDataURL();
    previewCapture.innerHTML = `<img src="${imgURL}" id="image" style="width: 500px; height:auto;">`;
    downloadButton.href = imgURL;
    downloadButton.download = "image.png";
});

closeButton.addEventListener("click", async () => {
    element.style.justifyContent = "center";
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
