import logo from "../images/logo.svg";
import { Route, Link, useHistory } from "react-router-dom";
import * as auth from "./Auth.js";

function Header({ loggedIn, setLoggedIn, userData }) {
  const history = useHistory();
  function getOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    history.push("/signin");
  }

  return (
    <header className="header">
      <img src={logo} alt="лого" className="header__logo" />
      <div className="header__box">
        {loggedIn && <p className="header__userEmail">{userData.email}</p>}
        {loggedIn && (
          <p className="header__link" onClick={getOut}>
            Выйти
          </p>
        )}
        <Route path="/signup">
          <Link className="header__link header__link_auth" to="signin">
            Войти
          </Link>
        </Route>
        <Route path="/signin">
          <Link className="header__link header__link_auth" to="signup">
            Регистрация
          </Link>
        </Route>
      </div>
    </header>
  );
}

export default Header;
