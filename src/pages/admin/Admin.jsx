import React from "react";
import "./admin.scss";
import AdminCreate from "./adminCreate";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="admin">
      <div className="admin__container">
        <div className="admin__sidebar">
          <button onClick={handleLogOut} className="admin__log-out">
            <IoMdExit />
          </button>
        </div>
        <div className="admin__content">
          <AdminCreate />
        </div>
      </div>
    </div>
  );
};

export default Admin;
