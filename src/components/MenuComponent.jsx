import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div>
          <img className="images" src={this.image} alt={this.image} />
          <p>{this.description}</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 mt-5">
          <div tag="li">
            <div onClick={() => this.onDishselect(dish)}>
              <img className="images" src={this.image} alt={this.image} />
            </div>
            <div className="ml-5">{dish.name}</div>
            <p>{dish.description}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div list>{menu}</div>
          <div className="row">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
