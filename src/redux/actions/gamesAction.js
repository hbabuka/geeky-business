import axios from "axios";
import { popularGamesURL } from "../../api";

// Action creator

export const loadGames = () => async (dispatch) => {
  // Fetch Axios
  const popularGamesData = await axios.get(popularGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
    },
  });
};
