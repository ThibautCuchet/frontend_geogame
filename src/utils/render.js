export const setImage = (src, id, style = "") => {
  const img = new Image();
  img.src = src;
  img.style.cssText = style;
  console.log(style, img.style);
  document.getElementById(id).append(img);
};

export const setTitle = (title) => {
  document.querySelector("title").innerText = title;
};
