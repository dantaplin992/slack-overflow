import {DiRuby, DiJsBadge, DiReact, DiCss3, DiCssdeck, DiCssTricks} from "react-icons/di";
import React from 'react'

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16
                    flex flex-col
                    bg-gray-800 text-white shadow-lg">

        <SideBarIcon icon={<DiRuby size="28" />} type="submit" text="Ruby" id="Ruby"/>
        <Divider />
        <SideBarIcon icon={<DiJsBadge size="24" />} type="submit" text="JavaScript" id="Javascript" />
        <SideBarIcon icon={<DiReact size="28" />} type="submit" text="React" id="React" />
        <Divider />
        <SideBarIcon icon={<DiCss3 size="24" />} type="submit" text="CSS" id="CSS" />
        <SideBarIcon icon={<DiCssdeck size="24" />} type="submit" text="CSS Deck" id="CSS-Deck" />
        <SideBarIcon icon={<DiCssTricks size="24" />} type="submit" text="CSS Tricks" id="CSS-Tricks" />


    </div>
  )
}

const SideBarIcon = ({ icon, text}) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
      {text}
      </span>
    </div>
  );
}

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
