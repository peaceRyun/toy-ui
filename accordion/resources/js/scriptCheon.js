document.addEventListener("click", (e) => {
  const aTag = e.target.closest("a");

  if (!aTag) return;

  if (aTag.querySelector("span")) {
    const li = aTag.closest("li");
    if (li.querySelector(".depth2")) {
      if (li.classList.contains("active")) {
        li.classList.remove("active");
      } else {
        li.classList.add("active");
      }
    }
  }
});