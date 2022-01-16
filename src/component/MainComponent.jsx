import React, { useEffect } from "react";
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
import {
  fetchDishes,
  fetchLeaders,
  fetchPromotion,
} from "../Store/actions/commentsstorageaction";

const MainComponent = (props) => {
  const dispatch = useDispatch();
  const dishes = useSelector(({ dishesStorage }) => {
    return dishesStorage.dishes;
  });
  const dishFetchError = useSelector(({ dishesStorage }) => {
    return dishesStorage.dishesFetchError;
  });
  const leaders = useSelector(({ leadersStorage }) => {
    return leadersStorage.leaders;
  });
  const leadersFetchError = useSelector(({ leadersStorage }) => {
    return leadersStorage.leadersFetchError;
  });
  const promotions = useSelector(({ promotionsStorage }) => {
    return promotionsStorage.promotions;
  });
  const promotionsFetchError = useSelector(({ promotionsStorage }) => {
    return promotionsStorage.promotionsFetchError;
  });
  const resetFeedbackForm = () => {
    dispatch(actions.reset("feedback"));
  };
  useEffect(() => {
    dispatch(fetchDishes());
    dispatch(fetchPromotion());
    dispatch(fetchLeaders());
  }, []);
  console.log("dishesFetchError>>>", dishFetchError);
  console.log("leadersFetchError>>>", leadersFetchError);
  console.log("promotionsFetchError>>>", promotionsFetchError);
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
