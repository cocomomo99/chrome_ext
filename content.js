function captureImage() {
  const video = document.querySelector("video");
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg");
}

function downloadImage(dataUri, fileName) {
  const link = document.createElement("a");
  link.href = dataUri;
  link.download = fileName;
  link.target = "_blank";
  link.click();
}



chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "captureAndDownload") {
    try {
      const dataUri = captureImage();
      downloadImage(dataUri, "screenshot.jpeg");
      sendResponse({ success: true });
    } catch (error) {
      console.error("Failed to capture image", error);
      sendResponse({ success: false });
    }
  }
});
