import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetail from "./dishDetail";
import Comments from "./comments";
export default class Menu extends Component {
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
    if (dish != null) return <DishDetail dish={dish} />;
    else return <div>No Selected Item Found To Show Its Detail</div>;
  }
  renderComments(comments) {
    if (comments != null) return <Comments comments={comments} />;
    else return <div></div>;
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>
                <h3>{dish.name}</h3>
              </CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}
