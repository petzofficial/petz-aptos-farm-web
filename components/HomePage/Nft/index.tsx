import Nftcss from "./Nft.module.css";

const Nft: React.FC = () => {
  return (
    <div className={Nftcss.NftWrap}>
      <div className={Nftcss.NftContainner}>
        <div className={Nftcss.left}>
          <img src="/Home/Tokenomics/nft.png" alt="coin" />
        </div>
        <div className={Nftcss.right}>
          <h1> NFT </h1>
          <p>
            {" "}
            PetZ NFTs are unique digital assets that operate on the blockchain and serve a variety of purposes, including collectibles. These NFTs are generated through our contract using a random-based mechanism, ensuring that each NFT is distinct and one-of-a-kind. Rest assured, you will never encounter an identical PetZ NFT generated more than once.
          </p>
          <button className={`btn ${Nftcss.buyPGT}`}> MINT PetZ NFT </button>
        </div>
      </div>
    </div>
  );
};

export default Nft;
