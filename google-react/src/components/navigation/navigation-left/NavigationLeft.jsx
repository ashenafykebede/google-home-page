import "./styles.css";
import { Link } from "../../link/Link";

const links = [
  {
    name: "About",
    link: "#",
    class: "navbar-child-item",
  },
  {
    name: "Store",
    link: "#",
    class: "navbar-child-item",
  },
];
export const NavigationLeft = () => {
  return (
    <div>
      <ul className="nav-bar-first-item">
        <Link links={links} />
      </ul>
    </div>
  );
};
