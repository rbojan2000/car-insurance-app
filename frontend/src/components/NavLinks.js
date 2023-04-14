import { NavLink } from 'react-router-dom';
import {adminLinks, salesAgentLinks} from '../utils/links';
import { useSelector } from 'react-redux';


var links = []
const setLinks = (role) => {

  if(role === "ROLE_ADMIN") {
    links = adminLinks
  }
  else if(role === "ROLE_SALES_AGENT") {
    links = salesAgentLinks
  }
}

const NavLinks = ({ toggleSidebar }) => {

  const { user } = useSelector((store) => store.user);
  
  setLinks(user.role)

  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link';
            }}
            key={id}
            onClick={toggleSidebar}
            end
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
