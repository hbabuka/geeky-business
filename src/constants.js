import {
  BellAlertIcon,
  HandThumbUpIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export const navData = [
  {
    id: "popular",
    name: "Popular Games",
    description: "Best rated video games in the past 365 days.",
    icon: <HandThumbUpIcon />,
  },
  {
    id: "upcoming",
    name: "Upcoming Games",
    description:
      "Video games that are going to be added in the following year.",
    icon: <RocketLaunchIcon />,
  },
  {
    id: "latest",
    name: "Latest Games",
    description:
      "Showing the newest video games according to their release date.",
    icon: <BellAlertIcon />,
  },
];
