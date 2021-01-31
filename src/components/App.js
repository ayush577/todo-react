import React, { useState } from "react";
// import ReactDOM from 'react-dom';
import "../style/Global.css";

const App = () => {
  const [theme, setTheme] = useState(true);

  return (
    <div className={`App ${theme ? "light-theme" : "dark-theme"}`}>
      <div className="container">
        <div className="helloworld">Hello World</div>
        <button
          className="btn"
          onClick={() => setTheme((prevTheme) => !prevTheme)}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default App;
