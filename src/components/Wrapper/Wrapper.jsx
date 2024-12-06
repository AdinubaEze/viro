import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import "./Wrapper.css";

const Wrapper = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sidebar open={open} onClose={() => setOpen(!open)} />
      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(!open)} />
      )}
      <main>
        <Navbar onMenuClick={() => setOpen(!open)} />
        <div className="children">{children}</div>
      </main>
    </>
  );
};

export default Wrapper;
