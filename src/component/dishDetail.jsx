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
import { useSelector } from "react-redux";
import Comments from "./comments";
import CommentForm from "./CommentForm";

const DishDetail = () => {
  const dishes = useSelector(({ dishesStorage }) => dishesStorage.dishes);
  const commentsGet = useSelector(({ commentsStorage }) => {
    return commentsStorage.comments;
  });
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
  console.log("comments>>>>", commentsGet);
  useEffect(() => {
    let dishesFiltered = dishes.filter(
      (dish) => dish.id === parseInt(params.id, 10)
    )[0];
    // let commentsFiltered = comments.filter(
    //   (comment) => comment.dishId === parseInt(params.id, 10)
    // );
    setDishes(dishesFiltered);
    // setAllComments(commentsFiltered);
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
          <CommentForm dishId={params.id} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
