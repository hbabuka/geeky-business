import { useSelector } from "react-redux";
import { PreviewModal } from "./PreviewModal";
import {
  ArrowTopRightOnSquareIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

// Platform imports
import { ReactComponent as Apple } from "../assets/apple.svg";
import { ReactComponent as Gamepad } from "../assets/gamepad.svg";
import { ReactComponent as Nintendo } from "../assets/nintendo.svg";
import { ReactComponent as Playstation } from "../assets/playstation.svg";
import { ReactComponent as Steam } from "../assets/steam.svg";
import { ReactComponent as Xbox } from "../assets/xbox.svg";
import { ReactComponent as Linux } from "../assets/linux.svg";
import { RootState } from "..";
import { ReactElement } from "react";
import {
  GameDetailsModel,
  GenreModel,
  PlatformsModel,
  PublisherModel,
} from "../utils/constants";

interface Props {
  showPreviewModal: boolean;
  setShowPreviewModal: (arg: boolean) => void;
}

export const GameDetails = ({
  showPreviewModal,
  setShowPreviewModal,
}: Props): ReactElement => {
  const { game, movies } = useSelector((state: RootState) => state.details);

  const resolvePlatformIcons = (platform: string) => {
    const platformIncludes = (value: string) => {
      return platform.toLowerCase().includes(value);
    };

    if (platformIncludes("playstation")) {
      return <Playstation className="w-5 h-5" />;
    } else if (platformIncludes("xbox")) {
      return <Xbox className="w-5 h-5" />;
    } else if (platformIncludes("pc")) {
      return <Steam className="w-5 h-5" />;
    } else if (platformIncludes("nintendo")) {
      return <Nintendo className="w-5 h-5" />;
    } else if (platformIncludes("ios")) {
      return <Apple className="w-5 h-5" />;
    } else if (platformIncludes("linux")) {
      return <Linux className="w-5 h-5" />;
    } else return <Gamepad className="w-5 h-5" />;
  };

  function resolveDescriptionMarkup(game: GameDetailsModel) {
    return { __html: game.description };
  }

  const { popular, latest, upcoming, searched } = useSelector(
    (state: RootState) => state.games
  );

  const allGames = [...popular, ...latest, ...upcoming, ...searched];
  const gameInGames = allGames.find((item) => item.id === game.id);

  const trailer = movies.results[0];

  const publishers =
    game.publishers?.length > 0
      ? game.publishers
          .map((publisher: PublisherModel) => publisher.name)
          .join(", ")
      : "Unknown";

  return (
    <div className="flex flex-col gap-6 mt-4 lg:mt-6">
      {gameInGames?.genres.length > 0 && (
        <div className="flex gap-2">
          {gameInGames?.genres.map((genre: GenreModel, index: number) => (
            <span
              className="chip chip-medium chip-outlined border-primary-400 text-primary-600"
              key={index}
            >
              {genre.name}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-4 sm:gap-8 flex-col sm:flex-row">
        <p
          dangerouslySetInnerHTML={resolveDescriptionMarkup(game)}
          className="text-secondary-600 grow -mt-2 lg:mt-0"
        ></p>
        <div className="bg-white rounded-[1.25rem] px-5 py-5 flex flex-col gap-6 border border-secondary-300 sm:w-60 shrink-0">
          <h6>Available on the following platforms:</h6>
          <div className="flex flex-col divide-y divide-secondary-200 gap-4">
            {game.platforms?.map((item: PlatformsModel) => (
              <div
                key={item.platform.id}
                className="flex grow items-center gap-4 [&:not(:first-child)]:pt-4"
              >
                {resolvePlatformIcons(item.platform.name)}
                <p className="text-secondary-600">{item.platform.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-4 flex gap-6">
        <button
          className="btn-secondary-contained inline-flex items-center gap-2"
          onClick={() => setShowPreviewModal(true)}
          disabled={movies.count < 1}
        >
          <PlayIcon className="w-6 h-6" />
          Preview
        </button>
        <a href={game.website} target="_blank" rel="noreferrer">
          <button
            className="btn-primary-outlined inline-flex items-center gap-2"
            disabled={game.website === ""}
          >
            <ArrowTopRightOnSquareIcon className="h-6 w-6" />
            Visit website
          </button>
        </a>
      </div>
      <h6>
        Published by: <span className="text-secondary-500">{publishers}</span>
      </h6>
      <hr className="border-secondary-300" />

      {showPreviewModal && (
        <PreviewModal
          setOpenModal={setShowPreviewModal}
          title={trailer.name}
          source={trailer.data["480"]}
        />
      )}
    </div>
  );
};
