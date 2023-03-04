import axios from "axios";
import { AppDispatch } from "../..";
import {
  popularGamesURL,
  upcomingGamesURL,
  latestGamesURL,
  searchGamesURL,
  topIndieGamesURL,
  topMultiplayerGamesURL,
} from "../../api";

// Action creator

export const loadGames = () => async (dispatch: AppDispatch) => {
  // Fetch Axios
  const popularGamesData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const latestGamesData = await axios.get(latestGamesURL());
  const topIndieGamesData = await axios.get(topIndieGamesURL());
  const topMultiplayerData = await axios.get(topMultiplayerGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
      new: latestGamesData.data.results,
      topIndie: topIndieGamesData.data.results,
      topMultiplayer: topMultiplayerData.data.results,
    },
  });
};

export const fetchSearch =
  (game_name: string) => async (dispatch: AppDispatch) => {
    // Fetch axios
    const searchGames = await axios.get(searchGamesURL(game_name));

    dispatch({
      type: "FETCH_SEARCHED",
      payload: {
        searched: searchGames.data.results,
      },
    });
  };
