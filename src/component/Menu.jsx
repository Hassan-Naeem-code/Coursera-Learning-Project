import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";
export default class Menu extends Component {
  render() {
    const menu = this.props.dishes.map((dish, index) => {
      return (
        <div className="col-12 col-md-5 m-1" key={index}>
          <Card key={dish.id}>
            <Link to={`/menu/${dish.id}`}>
              <CardImg
                width="100%"
                src={"assets/" + dish.image}
                alt={dish.name}
              />
              <CardImgOverlay>
                <CardTitle>
                  <h3>{dish.name}</h3>
                </CardTitle>
              </CardImgOverlay>
            </Link>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
  }
}
