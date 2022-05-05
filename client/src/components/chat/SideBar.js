import {DiRuby, DiJsBadge, DiReact, DiCss3, DiCssdeck, DiCssTricks} from "react-icons/di";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16
                    flex flex-col
                    bg-gray-800 text-white shadow-lg">

        <SideBarIcon icon={<DiRuby size="28" />} name="Ruby" id="Ruby"/>
        <Divider />
        <SideBarIcon icon={<DiJsBadge size="24" />} name="JavaScript" id="Javascript" />
        <SideBarIcon icon={<DiReact size="28" />} name="React" id="React" />
        <Divider />
        <SideBarIcon icon={<DiCss3 size="24" />} name="React" id="React" />
        <SideBarIcon icon={<DiCssdeck size="24" />} name="CSS Deck" id="CSS-Deck" />
        <SideBarIcon icon={<DiCssTricks size="24" />} name="CSS Tricks" id="CSS-Tricks" />


    </div>
  )
}

const SideBarIcon = ({ icon, text = 'title 😊' }) => {
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
