window.addEventListener("load", function () {
  let button1 = document.getElementById("button1");
  let button2 = document.getElementById("button2");
  button1.addEventListener("click", function () {
    window.location.href =
      "https://rezka.ag/series/action/32360-mandalorec-2019.html#t:1-s:1-e:1";
  });

  button2.addEventListener("click", function () {
    let img = document.createElement("img");
    img.src = "achem.jpg";
    img.style.align = "center";
    document.body.appendChild(img);
    button1.style.display = "none";
    button2.style.display = "none";
  });
});
