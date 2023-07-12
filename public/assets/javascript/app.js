function scrollToElements(elementSelector) {
  document
    .querySelector(elementSelector)
    .scrollIntoView({ behavior: "smooth" });
}

function addScrollToClickEvent(selector, elementSelector) {
  document.querySelector(selector).addEventListener("click", function (event) {
    event.preventDefault();
    scrollToElements(elementSelector);
  });
}

addScrollToClickEvent("#home", ".hero-section");
addScrollToClickEvent("#courses", ".hero-end");
addScrollToClickEvent("#events", ".events-area");
addScrollToClickEvent("#contact", ".about-column");
