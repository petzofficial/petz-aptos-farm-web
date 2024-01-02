import Statuscss from "./Status.module.css";
import StatusCard from "./StatusCard";

var nums: number[] = [1, 2, 3, 4, 5, 6];

const Status: React.FC = () => {
  return (
    <div className={Statuscss.StatusWrap}>
      <img src="/Home/Tokenomics/status.png" alt="Dollar" />
      <div className={Statuscss.StatusContainner}>
        <h1>PetZ Money Stats</h1>
        <div className={Statuscss.CardContainner}>
        {nums.map((index) => (
          <StatusCard key={index}/>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
