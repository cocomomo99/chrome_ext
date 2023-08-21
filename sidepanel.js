document.getElementById("capture-btn").addEventListener("click", () => { //capture, download and send to app engine
    chrome.runtime.sendMessage({ action: "captureAndDownload" });
  });
  
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "getImageUrl") {
      const filePath = message.filePath;
      const url = URL.createObjectURL({ file: filePath });
  
      const imgElement = document.querySelector("#captured-image");
      imgElement.src = url;
  
      sendResponse({ status: "success" });
    }
  });