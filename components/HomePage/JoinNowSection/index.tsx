import JoinNowSectioncss from "../JoinNowSection/JoinNowSection.module.css";

const JoinNowSection: React.FC = () => {
  return (
    <div className={JoinNowSectioncss.joinWrap}>
      <div className={JoinNowSectioncss.joinContainner}>
        <h1>Join Us Now!</h1>
        <button className={`btn ${JoinNowSectioncss.submitConnect}`}> Connect Wallet </button>
      </div>
    </div>
  );
};

export default JoinNowSection;
