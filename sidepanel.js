document.getElementById("capture-btn").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "captureAndDownload" });
  });
  
  // GCP Dataflow로 전송하는 기능을 구현할 경우 주석을 해제하십시오.
  // document.getElementById('send-btn').addEventListener('click', () => {
  //   chrome.runtime.sendMessage({ action: 'captureAndSendToDataflow' });
  // });