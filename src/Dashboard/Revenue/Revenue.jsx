import "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./Revenue.css";

const Revenue = () => {
  const getGradient = (context, colorStop) => {
    const { ctx, chartArea } = context.chart || {};
    if (!chartArea) return;
    let gradient = ctx.createLinearGradient(
      0,
      chartArea.bottom,
      0,
      chartArea.top
    );
    gradient.addColorStop(0.9, colorStop);
    gradient.addColorStop(0, "transparent");
    return gradient;
  };
  const data = {
    labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Invested",
        data: [350, 200, 500, 400, 250, 600, 100],
        borderColor: "rgb(126,14,255)",
        backgroundColor: (context) => {
          return getGradient(context, "rgba(126,14,255,0.2)");
        },
      },
      {
        label: "Expenses",
        data: [50,101.5, 80, 400, 190, 129.45,300],
        borderColor: "rgb(252,96,91)",
        backgroundColor: (context) => {
          return getGradient(context, "rgba(252,96,91,0.2)");
        },
      },
      {
        label: "Earnings",
        data: [200,230,1000,500,450.2,700,805.11],
        borderColor: "rgb(51,198,72)",
        backgroundColor: (context) => {
          return getGradient(context, "rgba(51,198,72,0.2)");
        },
      },
    ],
  };
  const options = {
    lineTension: 0.8,
    borderWidth: 2,
    fill: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
  };
  return (
    <div className="card revenue">
      <h2 className="title">Revenue</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Revenue;
