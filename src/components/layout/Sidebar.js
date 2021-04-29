import React, {useState} from "react";
import "./layout.css";
import {
  DesktopOutlined,
  ContainerOutlined,
  BarsOutlined,
  PicRightOutlined,
  FileOutlined,
} from "@ant-design/icons";

const Sidebar = () => {

    const sidebarCollapsed = localStorage.getItem('sidebar-collapsed')
    const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

    const handleToggler = () =>{
        if(isExpanded){
            setIsExpanded(false);
            localStorage.setItem('sidebar-collased', true);
            return
        }
        setIsExpanded(true)
        localStorage.removeItem('sidebar-collapsed ')
    }

  return (
    <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>
      <div className="sidebar-header">
        <DesktopOutlined 
        className="sidebar-icon"
        onClick={handleToggler} />
        <h1 className="sidebar-logo">
          OLS<span>ofware</span>
        </h1>
      </div>

      <div className="sidebar-items">
        <div className="item">
          <ContainerOutlined className="sidebar-icon" />
          <span className="sidebar-text">Programación</span>
        </div>

        <div className="item">
          <BarsOutlined className="sidebar-icon" />
          <span className="sidebar-text">Gestión de operaciones</span>
        </div>

        <div className="item">
          <PicRightOutlined className="sidebar-icon" />
          <span className="sidebar-text">Perfiles</span>
        </div>

        <div className="item">
          <label className="sidebar-icon" >R</label>
          <span className="sidebar-text"> Roles</span>
        </div>

        <div className="item">
          <label className="sidebar-icon" >U</label>
          <span className="sidebar-text"> Usuario</span>
        </div>

        <div className="item">
          <FileOutlined className="sidebar-icon" />
          <span className="sidebar-text">Reportes</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
