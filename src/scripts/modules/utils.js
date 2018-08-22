export const truncateText = el => {
  let wordArray = el.innerHTML.split(" ");
  while (el.scrollHeight > el.offsetHeight) {
    wordArray.pop();
    el.innerHTML = wordArray.join(" ") + "...";
  }
};
