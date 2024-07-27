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
    <div className="border h-full fixed shadow-lg max-w-[300]">
      <div>Logo</div>
      {menus &&
        menus.map((item) => {
          return (
            <div>
              <Link to={`./${item.link}`}>
                <FontAwesomeIcon icon={item.icon} />
              </Link>
            </div>
          );
        })}
    </div>
  );
}
