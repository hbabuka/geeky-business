// Media resize
export const resizeImage = (imagePath, size) => {
  const regex = /\'media\/screenshots/;
  const image = imagePath?.match(regex)
    ? imagePath?.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath?.replace("media/games", `media/resize/${size}/-/games`);

  return image;
};

export const isNew = (gameReleased) => {
  const currentDate = new Date();

  const getDateOneMonthAgo = () => {
    const newDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    let newMonth;
    let newYear;

    if (currentMonth === 1) {
      newMonth = 12;
      newYear = currentYear - 1;
    } else {
      newMonth = currentMonth - 1;
      newYear = currentYear;
    }

    newDate.setMonth(newMonth);
    newDate.setFullYear(currentYear);

    return newDate;
  };

  const getDateOneMonthAfter = () => {
    const newDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    let newMonth;
    let newYear;

    if (currentMonth === 12) {
      newMonth = 1;
      newYear = currentYear + 1;
    } else {
      newMonth = currentMonth + 1;
      newYear = currentYear;
    }

    newDate.setMonth(newMonth);
    newDate.setFullYear(currentYear);

    return newDate;
  };

  const oneMonthAgo = getDateOneMonthAgo();
  const oneMonthAfter = getDateOneMonthAfter();
  const release = new Date(gameReleased);

  if (release >= oneMonthAgo && release <= oneMonthAfter) {
    return true;
  } else return false;
};
