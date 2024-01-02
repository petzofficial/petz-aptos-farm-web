import StatusCardcss from"./StatusCard.module.css";

const StatusCard: React.FC = () => {
  return (
    <div className={StatusCardcss.statusCard}>
      <div className={StatusCardcss.grpcontainner}>
        <div className={StatusCardcss.grp}>
          <p> Label </p>
          <h2> $ VALUE </h2>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
