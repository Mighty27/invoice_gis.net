const mediaCapture = document.getElementById("mediaCanvas");
const captureButton = document.getElementById("capture-button");
var captureButtonStyle = document.getElementById("capture-button");
const previewCapture = document.getElementById("preview-capture");
const downloadButton = document.getElementById("download-button");
const closeButton = document.getElementById("close-button");
var element = document.getElementById("cover");


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
})