// Media resize
export const resizeImage = (imagePath, size) => {
  const regex = /\'media\/screenshots/;
  const image = imagePath.match(regex)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("media/games", `media/resize/${size}/-/games`);

  return image;
};
