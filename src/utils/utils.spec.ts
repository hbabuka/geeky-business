import { isNew, resizeImage } from "./utils";

describe("utils", () => {
  describe("resizeImage", () => {
    it("Should return a string as an URL with adapted screenshot image size of 640px", () => {
      // given
      const imagePath =
        "https://media.rawg.io/media/screenshots/2c0/2c0aebfd3a5b01239299e856f8c416a5.jpg";
      const size = 640;

      // when
      const received = resizeImage(imagePath, size);

      // then
      const expected =
        "https://media.rawg.io/media/resize/640/-/screenshots/2c0/2c0aebfd3a5b01239299e856f8c416a5.jpg";

      expect(received).toStrictEqual(expected);
    });

    it("Should return a string as an URL with adapted background image size of 1280px", () => {
      // given
      const imagePath =
        "https://media.rawg.io/media/games/17e/17e0128079e7446d77ec3ca8efb007c8.jpg";
      const size = 1280;

      // when
      const received = resizeImage(imagePath, size);

      // then
      const expected =
        "https://media.rawg.io/media/resize/1280/-/games/17e/17e0128079e7446d77ec3ca8efb007c8.jpg";

      expect(received).toStrictEqual(expected);
    });
  });

  describe("isNew", () => {
    it("Should resolve to true if the release date is not older than one month from current date", () => {
      // given
      const releaseDate = "2023-02-28";

      // when
      const received = isNew(releaseDate);

      // then
      expect(received).toStrictEqual(true);
    });

    it("Should resolve to false if the release date is older than one month from current date", () => {
      // given
      const releaseDate = "2021-12-05";

      // when
      const received = isNew(releaseDate);

      // then
      expect(received).toStrictEqual(false);
    });

    it("Should resolve to true if the release date is not one month after the current date", () => {
      // given
      const releaseDate = "2023-04-01";

      // when
      const received = isNew(releaseDate);

      // then
      expect(received).toStrictEqual(true);
    });

    it("Should resolve to false if the release date is older than one month from current date", () => {
      // given
      const releaseDate = "2024-01-05";

      // when
      const received = isNew(releaseDate);

      // then
      expect(received).toStrictEqual(false);
    });
  });
});
