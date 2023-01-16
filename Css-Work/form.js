const btn = document.querySelector("#msgSend");

function sendData(data) {
  console.log("sending data");

  const XHR = new XMLHttpRequest();

  const urlEncodedDataPairs = [];

  for (const [name, value] of Object.entries(data)) {
    urlEncodedDataPairs.push(
      `${encodeURIComponent(name)} = ${encodeURIComponent(value)}`
    );
  }

  const urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

  XHR.addEventListener("load", (event) => {
    alert("success");
  });

  XHR.addEventListener("error", (event) => {
    alert(" 403 Error");
  });

  XHR.open("POST", "https://website.com/php");

  XHR.setRequestHeader("Content-Type", "app/x-www-form-encoded");

  XHR.send(urlEncodedData);
}

btn.addEventListener("click", () => {
  sendData({ test: "ok" });
});
