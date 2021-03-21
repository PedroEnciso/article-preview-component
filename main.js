const shareMenu = document.getElementById("share-container");
const button = document.getElementById("share");

let isOpen = false;

const tl = new TimelineMax();

button.addEventListener("click", () => {
  if (isOpen == false) {
    //shareMenu.style.visibility = "visible";
    isOpen = true;

    tl.fromTo(
      shareMenu,
      0.5,
      { opacity: 0 },
      { opacity: 1, visibility: "visible", ease: Power2.linear }
    );
  } else {
    //shareMenu.style.visibility = "hidden";
    isOpen = false;
    tl.fromTo(
      shareMenu,
      0.5,
      { opacity: 1 },
      { opacity: 0, ease: Power2.linear }
    ).set(shareMenu, { visibility: "hidden" });
  }
});
