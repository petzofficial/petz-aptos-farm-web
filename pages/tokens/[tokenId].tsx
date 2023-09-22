import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Design2BodySec1, Design2BodySec2, Design2BellowHeader } from "../../components/TokensPage"
import { useRouter } from "next/router";
import { fetchSpecificTokenAction, fetchTokensAction, selectAccount, selectSpecificToken, selectTokens } from "app/reducers/AccountSlice";
import ErrorPage from "./ErrorPage";
const HomePage = () => {
  const tokens = useAppSelector(selectTokens)
  const account = useAppSelector(selectAccount)
  const specificToken = useAppSelector(selectSpecificToken)
  const router = useRouter()
  const dispatch = useAppDispatch();
  const { tokenId } = router.query
  useEffect(() => {
    // dispatch(fetchNftImgAction())

    dispatch(fetchSpecificTokenAction(tokenId as any));
    if (account && !specificToken) {
      dispatch(fetchTokensAction(account?.address))
    }
  }, [account, tokens])

  return (
    <>
      {account ? (
        <>
          <Design2BellowHeader />
          <Design2BodySec1 />
          <Design2BodySec2 />
        </>
      ) : (
        <>
          <ErrorPage />
        </>
      )}
    </>
  );
};

export default HomePage;
