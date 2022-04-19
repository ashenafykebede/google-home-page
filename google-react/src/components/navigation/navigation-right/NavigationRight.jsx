import { Link } from "../../link/Link";
import { User } from './User'
import "./styles.css";
const links = [
  {
    name: "Gmail",
    link: "#",
    class: "navbar-second-item",
  },
  {
    name: "Images",
    link: "#",
    class: "navbar-second-item",
  },
];
export const NavigationRight = () => {
  return (
    <div>
      <ul className="nav-bar-second-item">
        <Link links={links} />
        <a className="navbar-second-item" href="#">
          <i class="fas fa-beer"></i>
        </a>
       <User/>
      </ul>
    </div>
  );
};
