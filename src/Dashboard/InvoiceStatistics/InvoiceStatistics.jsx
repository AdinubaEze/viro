import React from "react";
import CircleProgress from "../../assets/CircleProgress";
import { perfectShape } from "../../utility";
import "./InvoiceStatistics.css";
const statistics = [
  {
    title: "Paid Invoice",
    count: 695,
    color: "rgb(var(--color-success))",
  },
  {
    title: "Unpaid Invoice",
    count: 565,
    color: "rgb(var(--color-warning))",
  },
  {
    title: "Overdue",
    count: 404,
    color: "rgb(var(--color-danger))",
  },
];

const InvoiceStatistics = () => {
  const total = statistics
    .map((s) => s.count)
    .reduce((accumalator, a) => accumalator + a, 0);
  return (
    <div className="card invoice-statistics">
      <h2 className="title">Invoice Statistics</h2>
      <div className="statistics">
        {statistics.map((statistic, index) => (
          <div className="statistic" key={index}>
            <CircleProgress
              color={statistic.color}
              count={statistic.count}
              total={total}
            />
            <div>
              <div className="row">
                <div
                  className="dot"
                  style={{
                    ...perfectShape(10, 10),
                    backgroundColor: statistic.color,
                  }}
                />
                <h3>{statistic.count}</h3>
              </div>
              <p className="muted">{statistic.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoiceStatistics;
