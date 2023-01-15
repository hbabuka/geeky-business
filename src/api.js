// Base URL
const BASE_URL = "https://api.rawg.io/api";

// Getting the current date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else return month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else return day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Query parameters
const LIST_OF_GAMES = "/games";
const API_KEY = `?key=${process.env.REACT_APP_RAWG_API_KEY}`;
const GAMES_URL = `${BASE_URL}${LIST_OF_GAMES}${API_KEY}`;
const POPULAR_GAMES = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const UPCOMING_GAMES = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const NEW_GAMES = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

// Games URL's
export const popularGamesURL = () => `${GAMES_URL}${POPULAR_GAMES}`;
export const upcomingGamesURL = () => `${GAMES_URL}${UPCOMING_GAMES}`;
export const newGamesURL = () => `${GAMES_URL}${NEW_GAMES}`;

// Game details URL's
export const gameDetailsURL = (game_id) =>
  `${BASE_URL}${LIST_OF_GAMES}/${game_id}${API_KEY}`;
export const gameScreenshotsURL = (game_id) =>
  `${BASE_URL}${LIST_OF_GAMES}/${game_id}/screenshots${API_KEY}`;
