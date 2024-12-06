import React from "react";
import { BsShop } from "react-icons/bs";
import { perfectShape } from "../../utility";
import { TbUser } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import "./Summaries.css";

const Summaries = () => {
  return (
    <section className="summaries">
      <div className="spotlight" />

      {/* Summary start */}
      <div className="card summary">
        <div className="top">
          <div>
            <h2 className="title">21,022</h2>
            <p className="muted">Total Sellers</p>
          </div>
          <div
            className="icon"
            style={{
              ...perfectShape(40, 40),
              background: "rgba(var(--color-danger),0.1)",
              color: "rgb(var(--color-danger))",
            }}
          >
            <BsShop />
          </div>
        </div>
        <div className="bottom">
          <span
            className="percent"
            style={{
              background: "rgba(var(--color-danger),0.1)",
              color: "rgb(var(--color-danger))",
            }}
          >
            +8.4%
          </span>
        </div>
      </div>
      {/* Summary end */}

      {/* Summary start */}
      <div className="card summary">
        <div className="top">
          <div>
            <h2 className="title">60,590</h2>
            <p className="muted">Total Users</p>
          </div>
          <div
            className="icon"
            style={{
              ...perfectShape(40, 40),
              background: "rgba(var(--primary),0.1)",
              color: "rgb(var(--primary))",
            }}
          >
            <TbUser />
          </div>
        </div>
        <div className="bottom">
          <span
            className="percent"
            style={{
              background: "rgba(var(--primary),0.1)",
              color: "rgb(var(--primary))",
            }}
          >
            +8.4%
          </span>
        </div>
      </div>
      {/* Summary end */}

      {/* Summary start */}
      <div className="card summary">
        <div className="top">
          <div>
            <h2 className="title">90,483</h2>
            <p className="muted">Total Orders</p>
          </div>
          <div
            className="icon"
            style={{
              ...perfectShape(40, 40),
              background: "rgba(var(--color-warning),0.1)",
              color: "rgb(var(--color-warning))",
            }}
          >
            <BsShop />
          </div>
        </div>
        <div className="bottom">
          <span
            className="percent"
            style={{
              background: "rgba(var(--color-warning),0.1)",
              color: "rgb(var(--color-warning))",
            }}
          >
            +8.4%
          </span>
        </div>
      </div>
      {/* Summary end */}

      {/* Summary start */}
      <div className="card summary">
        <div className="top">
          <div>
            <h2 className="title">21,022</h2>
            <p className="muted">Online</p>
          </div>
          <div
            className="icon"
            style={{
              ...perfectShape(40, 40),
            }}
          >
            <FiUser />
          </div>
        </div>
        <div className="bottom">
          <span
            className="percent"
          >
            +8.4%
          </span>
        </div>
      </div>
      {/* Summary end */}


    </section>
  );
};

export default Summaries;
