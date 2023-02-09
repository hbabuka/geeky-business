import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  latestGamesURL,
  searchGamesURL,
} from "../../api";

// Action creator

export const loadGames = () => async (dispatch) => {
  // Fetch Axios
  const popularGamesData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const latestGamesData = await axios.get(latestGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
      new: latestGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  // Fetch axios
  const searchGames = await axios.get(searchGamesURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
