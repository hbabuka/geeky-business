import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../../api";

// Action creator

export const loadGames = () => async (dispatch) => {
  // Fetch Axios
  const popularGamesData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
      new: newGamesData.data.results,
    },
  });
};
