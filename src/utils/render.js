export const setImage = (src, id, style = "", callback = null) => {
  const img = new Image();
  img.src = src;
  img.style.cssText = style;
  document.getElementById(id).innerHTML = "";
  document.getElementById(id).append(img);
  if (callback) img.addEventListener("click", callback);
};

export const setTitle = (title) => {
  document.querySelector("title").innerText = title;
};

export const blinkItem = (element, blinkColor, options = {}) => {
  const currentColor = element.style.background;

  element.animate(
    [
      {
        background: blinkColor,
      },
      {
        background: currentColor,
      },
    ],
    options
  );
};

export const showError = (message) => {
  let element = document.querySelector("#error-message");
  element.innerHTML = `<div class="error-message alert alert-danger" role="alert">${message}</div>`;
  setTimeout(() => (element.innerHTML = ""), 5000);
};

export const setNavSize = (size) => {
  document.querySelector("#logo").querySelector("img").style.height = size;
};
