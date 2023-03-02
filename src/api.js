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
const POPULAR_GAMES = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const UPCOMING_GAMES = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const NEW_GAMES = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;
const SEARCH_GAMES = `&search=`;
const TOP_INDIE = `&genres=indie&ordering=-rating&page_size=6`;
const TOP_MULTIPLAYER = `&tags=multiplayer&ordering=-rating&page_size=3`;

// Games URL's
export const popularGamesURL = () => `${GAMES_URL}${POPULAR_GAMES}`;
export const upcomingGamesURL = () => `${GAMES_URL}${UPCOMING_GAMES}`;
export const latestGamesURL = () => `${GAMES_URL}${NEW_GAMES}`;
export const topIndieGamesURL = () => `${GAMES_URL}${TOP_INDIE}`;
export const topMultiplayerGamesURL = () => `${GAMES_URL}${TOP_MULTIPLAYER}`;

// Game details URL's
export const gameDetailsURL = (game_id) =>
  `${BASE_URL}${LIST_OF_GAMES}/${game_id}${API_KEY}`;
export const gameScreenshotsURL = (game_id) =>
  `${BASE_URL}${LIST_OF_GAMES}/${game_id}/screenshots${API_KEY}`;
export const gameMoviesURL = (game_id) =>
  `${BASE_URL}${LIST_OF_GAMES}/${game_id}/movies${API_KEY}`;

// Searched games
export const searchGamesURL = (game_name) =>
  `${GAMES_URL}${SEARCH_GAMES}${game_name}&page_size=12`;
