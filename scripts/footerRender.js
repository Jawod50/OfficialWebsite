fetch("./section/footerRender.html")
  .then((response) => response.text())
  .then(
    (htmlContent) =>
      (document.getElementById("footer-container").innerHTML = htmlContent)
  );
