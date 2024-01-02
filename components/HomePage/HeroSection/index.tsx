import Image from "next/image";
import coin from "../../../public/Home/Hero/hero.png";
import HeroSectioncss from "./HeroSection.module.css";

const HeroSectoin: React.FC = () => {
  return (
    <div className={HeroSectioncss.heroContainerWrap}>
      <div className={HeroSectioncss.heroContainer}>
        <div className={HeroSectioncss.left}>
        <h1>
        PetZ Money</h1>
          <p>Boost Productivity with Focus, Achievement and Effort</p>
          <button className={`btn + ${HeroSectioncss.submitConnect}`}>

            Buy PGT
          </button>
         {/*  <button className={HeroSectioncss.submitTrade}> Trade Now</button> */}
        </div>
        <div className={HeroSectioncss.right}>
          <div className={HeroSectioncss.img}>
            &apos<Image
              src={coin}
              alt="coin"
              fill={true}
              style={{ objectFit: "contain" }}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectoin;
