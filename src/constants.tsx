import {
  BellAlertIcon,
  DocumentMagnifyingGlassIcon,
  HandThumbUpIcon,
  RocketLaunchIcon,
  StarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { ReactNode } from "react";

// Data constants

export const navData: NavDataModel[] = [
  {
    id: "popular",
    name: "Popular Games",
    description: "Best rated video games in the past 365 days.",
    icon: <HandThumbUpIcon />,
  },
  {
    id: "top-indie",
    name: "Top Indie Games",
    description: "A preview of the top rated indie games of all times.",
    icon: <StarIcon />,
  },
  {
    id: "upcoming",
    name: "Upcoming Games",
    description:
      "Video games that are going to be added in the following year.",
    icon: <RocketLaunchIcon />,
  },
  {
    id: "top-multiplayer",
    name: "Top Multiplayer Games",
    description: "The more, the merrier. Best multiplayer games of all time.",
    icon: <UsersIcon />,
  },
  {
    id: "latest",
    name: "Latest Games",
    description:
      "Showing the newest video games according to their release date.",
    icon: <BellAlertIcon />,
  },
  {
    id: "searched",
    name: "Search results",
    description:
      "Searching through the database and filter results by game name.",
    icon: <DocumentMagnifyingGlassIcon />,
  },
];

// Shared data models

export interface NavDataModel {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
}

export interface GameModel {
  id: string;
  name: string;
  released: string;
  background_image: string;
  genres: GenreModel[];
}

export interface GameDetailsModel {
  name: string;
  description: string;
}

export interface PublisherModel {
  name: string;
}

export interface GenreModel {
  name: string;
}

export interface PlatformsModel {
  platform: {
    id: number;
    name: string;
  };
}

export interface ScreenshotModel {
  id: string;
  image: string;
}

export interface MoviesModel {
  name: string;
  date: {
    480: string;
    max: string;
  };
}
