document.getElementById("capture-btn").addEventListener("click", () => {   // 캡처, 다운로드 및 앱 엔진으로 전송
    chrome.runtime.sendMessage({ action: "captureAndDownload" });
  });


  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "setImageUri") {
      const imageUrl = message.imageUrl;
  
      const imgElement = document.querySelector("#captured-image");
      imgElement.src = imageUrl;
      imgElement.style.display = "block";
      sendResponse({ status: "success" });
    }

    if (message.action === "setServerResponse") {
      const serverResponse = message.serverResponse;
  
      // 서버 응답 결과를 출력합니다
    const responseElement = document.querySelector("#response");
    responseElement.textContent = serverResponse;
    responseElement.style.display = "block";
  
      sendResponse({ status: "success" });
    }
    
  });