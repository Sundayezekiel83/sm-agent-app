const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="bread-crumb mx-2">
      <h3 className="text-2xl font-bold">{title || null}</h3>
      <div className="d-flex">
        <span className="dashboard-greetings" style={{ marginRight: '10px' }}>
          {subtitle || null}
        </span>
      </div>
    </div>
  );
};

export default PageTitle;
