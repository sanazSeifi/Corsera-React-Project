import Menu from "./components/MenuComponent";
import './App.css';
import {DISHES} from './shared/dishes';
import { Component } from "react";


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    
  };
}

render() {
  return (
    <div className="App">
      {
      
      /* <Navbar dark color="primary">
        <div className="container">
          <navbarBrand href="/">Ristorant</navbarBrand>
        </div>
      </Navbar> */}
      <Menu dishes={this.state.dishes}/>
    </div>
  );
}
}

export default App;