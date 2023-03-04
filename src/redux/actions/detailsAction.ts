import axios from "axios";
import { AppDispatch } from "../..";
import { gameDetailsURL, gameScreenshotsURL, gameMoviesURL } from "../../api";

export const loadDetails = (id: string) => async (dispatch: AppDispatch) => {
  dispatch({
    type: "LOADING_DETAILS",
  });

  // Fetch Axios
  const detailsData = await axios.get(gameDetailsURL(id));
  const screenshotsData = await axios.get(gameScreenshotsURL(id));
  const moviesData = await axios.get(gameMoviesURL(id));

  dispatch({
    type: "GET_DETAILS",
    payload: {
      game: detailsData.data,
      screenshots: screenshotsData.data,
      movies: moviesData.data,
    },
  });
};
