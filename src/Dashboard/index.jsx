import Wrapper from "../components/Wrapper/Wrapper";
import Summaries from "./Summaries/Summaries";
import Revenue from "./Revenue/Revenue";
import InvoiceStatistics from "./InvoiceStatistics/InvoiceStatistics";
import BestSelling from "./BestSelling/BestSelling";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Wrapper>
      <Summaries />
      <section className="revenue-grid">
        <div className="spotlight" />
        <Revenue />
        <InvoiceStatistics />
      </section>
      <BestSelling />
    </Wrapper>
  );
};

export default Dashboard;
