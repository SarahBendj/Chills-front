import './style.scss';

const Stats = () => {
  return (
    <div className="stat-container">
      <div className="stat-item">
        <div className="stat-value">12,000</div>
        <div className="stat-label">VISITS</div>
      </div>
      <div className="stat-item">
        <div className="stat-value">425</div>
        <div className="stat-label">BOOKINGS</div>
      </div>
      <div className="stat-item">
        <div className="stat-value">+99</div>
        <div className="stat-label">USERS</div>
      </div>
    </div>
  );
};

export default Stats;
