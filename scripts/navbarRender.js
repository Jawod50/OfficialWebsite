fetch("./section/navbarRender.html")
  .then((response) => response.text())
  .then(
    (htmlContent) =>
      (document.getElementById("navbar-container").innerHTML = htmlContent)
  );
