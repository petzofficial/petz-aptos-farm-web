import StatusCardcss from"./StatusCard.module.css";

const StatusCard: React.FC = () => {
  return (
    <div className={StatusCardcss.statusCard}>
      <div className={StatusCardcss.grpcontainner}>
        <div className={StatusCardcss.grp}>
          <p style={{ marginTop: 0 }}> Coin Price, Circulating Supply, Market Cap, TVL, Total Users, Total Transactions </p>
          <h2> $ 0 </h2>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
