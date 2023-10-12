import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Design2BodySec1, Design2BodySec2, Design2BellowHeader } from "../../components/TokensPage"
import { useRouter } from "next/router";
import { fetchNftImgAction, fetchTokensAction, selectAccount, selectSpecificToken, selectTokens } from "app/reducers/AccountSlice";
import ErrorPage from "./ErrorPage";
import FarmsTable from '../../components/HomePage/FarmsTable/index';

const TokenDetailPage = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()

    const { tokenId } = router.query

    const tokens = useAppSelector(selectTokens)
    const account = useAppSelector(selectAccount)
    const specificToken = useAppSelector(selectSpecificToken(tokenId as string))





    useEffect(() => {
        if (!tokens.length) {
            dispatch(fetchTokensAction())
        }
    }, [dispatch, account])

    useEffect(() => {
        if (specificToken && !specificToken.image) {
            const tokenURI: string = specificToken.current_token_data?.token_uri
            dispatch(fetchNftImgAction(tokenURI, tokenId as string))
        }
    }, [dispatch, specificToken])

    return (
        <>
            {account ? (
                <>
                    <FarmsTable />
                </>
            ) : (
                <>
                    <ErrorPage />
                </>
            )}
        </>
    );
};

export default TokenDetailPage;
