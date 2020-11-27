export const setImage = (src, id, style = "", callback = null) => {
  const img = new Image();
  img.src = src;
  img.style.cssText = style;
  console.log(style, img.style);
  document.getElementById(id).append(img);
  if (callback) img.addEventListener("click", callback);
};

export const setTitle = (title) => {
  document.querySelector("title").innerText = title;
};
