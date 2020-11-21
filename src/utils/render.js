export const setImage = (src, id) => {
  const img = new Image();
  img.src = src;
  document.getElementById(id).append(img);
};

export const setTitle = (title) => {
  document.querySelector("title").innerText = title;
};
