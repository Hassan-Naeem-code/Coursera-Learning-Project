import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Menu from "./Menu";
import AboutComponent from "./AboutComponent";
import DishDetail from "./dishDetail";
import ContactComponent from "./ContactComponent";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const MainComponent = (props) => {
  const dispatch = useDispatch();
  const dishes = useSelector(({ dishesStorage }) => {
    return dishesStorage.dishes;
  });
  const leaders = useSelector(({ leadersStorage }) => {
    return leadersStorage.leaders;
  });
  const promotions = useSelector(({ promotionsStorage }) => {
    return promotionsStorage.promotions;
  });
  const resetFeedbackForm = () => {
    dispatch(actions.reset("feedback"));
  };
  console.log("props>>>", props);
  return (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition key={props.location} classNames="page" timeout={300}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  dish={dishes.filter((dish) => dish.featured)[0]}
                  promotion={promotions.filter((promo) => promo.featured)[0]}
                  leader={leaders.filter((leader) => leader.featured)[0]}
                />
              }
            />
            <Route exact path="/menu" element={<Menu dishes={dishes} />} />
            <Route path="/menu/:id" element={<DishDetail />} />
            <Route
              path="/aboutus"
              element={<AboutComponent leaders={leaders} />}
            />
            <Route
              path="/contactus"
              element={
                <ContactComponent resetFeedbackForm={resetFeedbackForm} />
              }
            />
            <Route
              path="*"
              element={
                <Home
                  dish={dishes.filter((dish) => dish.featured)[0]}
                  promotion={promotions.filter((promo) => promo.featured)[0]}
                  leader={leaders.filter((leader) => leader.featured)[0]}
                />
              }
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
};
export default MainComponent;
