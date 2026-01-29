import "../css/StatCard.css";

export const StatCard = ({ icon, number, label }) => (
  <div className="col-md-6">
    <div className="stat-card">
      <img src={icon} alt={label} className="stat-icon" />
      <div>
        <p className="stat-number">{number}</p>
        <p className="stat-label" dangerouslySetInnerHTML={{ __html: label }} />
      </div>
    </div>
  </div>
);
