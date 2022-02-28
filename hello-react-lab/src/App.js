// src/App.js
import './App.css';
import Article from "./components/Article.jsx"

import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <section className='App-header'>
        <nav className='App-navbar'>
          <img src={logo} alt="ironhack logo"></img>
          <img className='Navbar-menu' src={menu} alt="menu img"></img>
        </nav>
        <div className='Section-intro'>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use <br/> the most popular frontend library, and become a super Ninja developer.</p>
          <button>Awesome!</button>
        </div>
      </section>
      <section className='Main'>
        <Article url={icon1} text="icon1" title="Declarative" content="React makes it painless to create interactive UIs."/>
        <Article url={icon2} text="icon2" title="Components" content="Build encapsulated components that manage their state."/>
        <Article url={icon3} text="icon3" title="Single-Way" content="A set of inmutable values are passed to the component's."/>
        <Article url={icon4} text="icon4" title="JSX" content="Statically-typed, designed to run on modern browsers."/>
      </section>
    </div>
  );
}
export default App;
