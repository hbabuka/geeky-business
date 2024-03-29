import {
  MoviesModel,
  PlatformsModel,
  ScreenshotModel,
} from "../../utils/constants";

interface DetailsStateModel {
  game: { platforms: PlatformsModel[] };
  screenshots: { results: ScreenshotModel[] };
  movies: { results: MoviesModel[] };
  isLoading: boolean;
}

const initialState: DetailsStateModel = {
  game: { platforms: [] },
  screenshots: { results: [] },
  movies: { results: [] },
  isLoading: true,
};

export const detailsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
        movies: action.payload.movies,
        isLoading: false,
      };
    case "LOADING_DETAILS":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};
