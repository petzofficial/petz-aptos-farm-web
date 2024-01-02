import Tokenomicscss from "./Tokenomics.module.css";

const Tokenomics: React.FC = () => {
  return (
    <div className={Tokenomicscss.tokenomicsWrap}>
      <div className={Tokenomicscss.tokenomicsContainner}>
        <h1> Tokenomics </h1>
        <div className={Tokenomicscss.coinCard}>
          <div className={Tokenomicscss.left}>
            <img src="/Home/Tokenomics/pgt-1.png" alt="coin" />
            <h2> PetZ Gold Token ($PGT) </h2>
            <p>
              The PetZ Gold Token serves as both a governance and utility token, granting users access to various governance features and playing a central role in PetZs focus-to-earn ecosystem. It offers a range of utilities, including leveling up, minting, and facilitating the buying and selling of PetZ NFTs.
            </p>
          </div>
          <div className={Tokenomicscss.right}>
            <img src="/Home/Tokenomics/pst.png" alt="coin" />
            <h2> PetZ Gold Token ($PGT) </h2>
            <p>
              {" "}
              The PetZ Silver Token operates as a reward token, functioning similarly to reward points. Users have the opportunity to earn these tokens through actions such as signing up, referring friends, following, and actively participating in the Web 3.0 focus-to-earn ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
