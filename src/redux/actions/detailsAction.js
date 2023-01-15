import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../../api";

export const loadDetails = (id) => async (dispatch) => {
  // Fetch Axios
  const detailsData = await axios.get(gameDetailsURL(id));
  const screenshotsData = await axios.get(gameScreenshotsURL(id));

  dispatch({
    type: "GET_DETAILS",
    payload: {
      game: detailsData.data,
      screenshots: screenshotsData.data,
    },
  });
};
