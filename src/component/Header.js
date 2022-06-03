import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import headerStyles from "./header.module.css";
import headerDarkStyles from "./dark-mode-style/headerDark.module.css";
import { setDarkMode } from "../store/reducer";
import { Link } from "react-router-dom";

function Header() {
  const { darkMode } = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    if(darkMode){

      dispatch(setDarkMode(localStorage.getItem('mode')));
    }

    
  }, [darkMode,dispatch])
  
  console.log(localStorage.getItem('mode'));

  const handleChange = (e) => {
    dispatch(setDarkMode(e.target.checked));
    window.localStorage.setItem("mode", e.target.checked);
    console.log(e);
  };

  return (
    <div
      className={darkMode ? headerDarkStyles.container : headerStyles.container}
    >
      <Link to="/">
        <h1 style={darkMode ? { color: "white" } : { color: "black" }}>
          Rick And Morty
        </h1>
      </Link>
      <div className={headerStyles.checkboxcontainer}>
        <input onChange={handleChange} id="checkbox" type="checkbox" />
        <label htmlFor="checkbox"></label>
      </div>
    </div>
  );
}

export default Header;
