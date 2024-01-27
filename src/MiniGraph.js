export default function MiniGraph({ data }) {
  return (
    <section className="graph-deets">
      <div className="graph-icons">
        <div>
          <img src={data.iconUrl} alt="box" />
        </div>
        <img src={data.grapghUrl} alt="box" />
      </div>
      <p className="fade">{data.description}</p>
      <p className="bold">{data.cost}</p>
      <div className="impressions">
        <div
          className={`percentage ${data.bgColor === "green" ? "green" : "red"}`}
        >
          <div>
            <img src={data.chartUrl} alt="downward-graph" />
          </div>
          <p className="small">23.5%</p>
        </div>
        <p className="small">vs.previous month</p>
      </div>
    </section>
  );
}
