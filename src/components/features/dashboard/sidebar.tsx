import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Sidebar() {
  let location = useLocation();
  const menus = [
    {
      title: "home",
      link: "home",
      icon: `check-square 2xl`,
    },
    {
      title: "inbox",
      link: "inbox",
      icon: `check-square`,
    },
    {
      title: "chat",
      link: "chat",
      icon: `check-square`,
    },
    {
      title: "activity",
      link: "activity",
      icon: `check-square`,
    },
    {
      title: "browse",
      link: "browse",
      icon: `check-square`,
    },
    {
      title: "new note",
      link: "newnote",
      icon: `check-square`,
    },
    {
      title: "more",
      link: "more",
      icon: `check-square`,
    },
    {
      title: "profile",
      link: "profile",
      icon: `check-square`,
    },
  ];
  return (
    <div className="bg-white z-10 fixed border h-full shadow-lg min-w-['100px']">
      <div>Logo</div>
      {menus &&
        menus.map((item) => {
          return (
            <div className="p-2">
              <Link to={`./${item.link}`}>
                <div className="flex align-center items-center">
                  <span>{item.title}</span>
                  <FontAwesomeIcon icon={item.icon} style={{ width: 50 }} />
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
