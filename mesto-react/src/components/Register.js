import { Link, useHistory } from "react-router-dom";
import * as auth from "./Auth.js";
import { useState } from "react";

function Register({ setInfoTooltipSucces, setInfoTooltipDecline }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function handleSubmit(evt) {
    evt.preventDefault();
    auth
      .register(email, password)
      .then((res) => {
        if (res.data) {
          setInfoTooltipSucces(true);
        }
      })
      .catch((err) => {
        setInfoTooltipDecline(true);
        console.log(err);
      });
  }

  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <h2 className="authForm__title">Регистрация</h2>
      <input
        className="authForm__input authForm__input_email"
        type="email"
        value={email}
        placeholder="Email"
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        className="authForm__input authForm__input_password"
        type="password"
        value={password}
        placeholder="Пароль"
        onChange={({ target }) => setPassword(target.value)}
      />
      <button type="submit" className="authForm__button">
        Зарегистрироваться
      </button>
      <Link to="/signin" className="authForm__link">
        Уже зарегистрированы? Войти
      </Link>
    </form>
  );
}

export default Register;
