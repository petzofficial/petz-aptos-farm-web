export interface ICardData {
    onShowUnstackedPopup(): any;
    onShowStackedPopup(): any;
    // cards: {
    //     images: {
    //         logoImg1: { src: string };
    //         logoImg2: { src: string };
    //         cryptoLogo: { src: string };
    //         graphLogo: { src: string };
    //     };
    //     type: string;
    //     connectionType: string;
    //     cryptoAmount: string;
    //     cryptoName: string;
    //     durationDetails: string;
    //     gtapheDetails: string;
    //     itemName: string;
    //     itemDetails: string;
    //     APR: string;
    //     TVL: string;
    //     staked: string;
    //     earned: string;
    //     timeLeft: string;
    // }
}

export interface ICardData2 {

    images: {
        logoImg1: { src: string };
        logoImg2: { src: string };
        cryptoLogo: { src: string };
        graphLogo: { src: string };
    };
    type: string;
    connectionType: string;
    cryptoAmount: string;
    cryptoName: string;
    durationDetails: string;
    gtapheDetails: string;
    itemName: string;
    itemDetails: string;
    APR: string;
    TVL: string;
    staked: string;
    earned: string;
    timeLeft: string;
    active:string,
    myForm:string
}
