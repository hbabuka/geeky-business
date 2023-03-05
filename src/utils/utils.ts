import { useEffect } from "react";

/**
 * Resizes an image with URL
 *
 * @param {string} imagePath - The image URL
 * @param {string} size - The dessired size of the image
 * @returns the API url with adapted image size
 */
export const resizeImage = (imagePath: string, size: number) => {
  const regex = /media\/screenshots/;
  const image = imagePath?.match(regex)
    ? imagePath?.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath?.replace("media/games", `media/resize/${size}/-/games`);

  return image;
};

/**
 * Determines if a game is new accoring to the current date.
 *
 * @param {Date} gameReleased - The release date of the game
 * @returns boolean if the game is new or not
 */
export const isNew = (gameReleased: string) => {
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

/**
 * To be invoked where we want to scrool to a certain part of the page.
 *
 * @param {string | number} id - The id of the HTML element
 * @param {boolean} async -
 * @param {number} offset - The offset from the top of the screen
 */
export const useHashScroll = (id: string, async = false, offset = 0) => {
  useEffect(() => {
    const { hash } = window.location;

    const scrollToElement = (id: string) => {
      const element = document.getElementById(id);

      if (element) {
        const headerOffset = offset;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    if (hash === `#${id}`) {
      if (async) {
        setTimeout(() => scrollToElement(id), 500);
      } else {
        scrollToElement(id);
      }
    }
  }, [id, async, offset]);
};
