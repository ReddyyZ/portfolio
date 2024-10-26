const scrollTopBtn = document.querySelector("#scroll-up-btn");
scrollTopBtn.onclick = (e) => {
  e.preventDefault();

  document.scrollingElement.scrollTo({
    top: 0
  });
}

document.addEventListener("scroll", (event) => {
  if (document.scrollingElement.scrollTop !== 0) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
});