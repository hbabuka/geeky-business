import { ReactElement, useEffect, useState } from "react";
import { GameDetails } from "../components/GameDetails";
import { GameDetailsIntro } from "../components/GameDetailsIntro";
import { GameScreenshots } from "../components/GameScreenshots";
import { loadDetails } from "../redux/actions/detailsAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadGames } from "../redux/actions/gamesAction";
import { Footer } from "../components/Footer";
import { Spinner } from "../components/Spinner";
import { AppDispatch, RootState } from "..";

export const GameDetailsPage = (): ReactElement => {
  const { isLoading } = useSelector((state: RootState) => state.details);
  const [openPreviewModal, setOpenPreviewModal] = useState(false);

  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(loadGames());
      dispatch(loadDetails(id));
    }
  }, [dispatch, id]);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <GameDetailsIntro />
      <div className="layout-container flex flex-col gap-6">
        <GameDetails
          showPreviewModal={openPreviewModal}
          setShowPreviewModal={setOpenPreviewModal}
        />
        <GameScreenshots openPreviewModal={openPreviewModal} />
      </div>
      <Footer />
    </>
  );
};
