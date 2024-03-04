import logo from "./logo.svg";
import "./App.css";

function Pizza() {
  return <div>
    
    <img src='pizzas/focaccia.jpg' />
    <h2>Pizza</h2>
  <p>Bread with italian olive oil and rosemary</p></div>

}

function App() {
  return (<div><h1>Hello React!</h1><Pizza /></div>);
}

export default App;
