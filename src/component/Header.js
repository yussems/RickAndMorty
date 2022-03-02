import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import headerStyles from "./header.module.css";
import headerDarkStyles from "./dark-mode-style/headerDark.module.css";
import { setDarkMode } from "../store/reducer";

function Header() {
  const { darkMode } = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setDarkMode(e.target.checked));
  };
  console.log(darkMode);

  return (
    <div
      className={darkMode ? headerDarkStyles.container : headerStyles.container}
    >
      <h1>Rick And Morty</h1>
      <div className={headerStyles.checkboxcontainer}>
        <input onChange={handleChange} id="checkbox" type="checkbox" />
        <label htmlFor="checkbox"></label>
      </div>
    </div>
  );
}

export default Header;
