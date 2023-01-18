import { Link } from "react-router-dom";
import { useAuth } from "../context/auth/authContext";
import { HeaderContainer } from "./header.styles";
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from "react";
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  const {signout} = useAuth()
  const [showMenu, setShowMenu] = useState<boolean>(false)

  function handleShowMenu(){
    showMenu ? setShowMenu(false) : setShowMenu(true)
  }

  return (
    <HeaderContainer>
      <h1>Logo</h1>
      {!showMenu &&<GiHamburgerMenu className="hamburger" onClick={handleShowMenu} />}
      <ul className={showMenu ? "show_menu": ''}>
        <AiOutlineClose id="close" onClick={handleShowMenu} />
        <li>
          <Link to="/">Principal</Link>
        </li>
        <li>
          <Link to="/cat">Pagina 2</Link>
        </li>
        <li>
          <Link to="/crud">Pagina 3</Link>
        </li>
        <li><span onClick={signout}>Sair</span></li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
