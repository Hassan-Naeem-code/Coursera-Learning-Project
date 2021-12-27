import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  CardSubtitle,
  BreadcrumbItem,
} from "reactstrap";
import { Link, useParams } from "react-router-dom";
import Comments from "./comments";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";

const DishDetail = () => {
  let [Dishes, setDishes] = useState([]);
  let [AllComments, setAllComments] = useState([]);
  let params = useParams();
  const RenderDish = ({ dish }) => {
    return (
      <Card>
        <CardImg src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          {dish.designation ? (
            <CardSubtitle>{dish.designation}</CardSubtitle>
          ) : null}
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  };
  useEffect(() => {
    let dishes = DISHES.filter(
      (dish) => dish.id === parseInt(params.id, 10)
    )[0];
    let comments = COMMENTS.filter(
      (comment) => comment.dishId === parseInt(params.id, 10)
    );
    setDishes(dishes);
    setAllComments(comments);
  }, [params.id]);
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{Dishes.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{Dishes.name}</h3>
          <h3>Details</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={Dishes} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <Comments comments={AllComments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
