const btn = document.getElementById("back-to-top-btn");

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const img = document.getElementById("phone-demo");

if (window.innerWidth <= 620) {
  img.src = "assets/phone-mobile.png";
} else {
  img.src = "assets/phone-desktop.png";
}

const isMobile = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
};

if (isMobile()) {
    document.getElementById("main-canvas").remove();
    document.getElementById("logo").style.display = 'block';
}