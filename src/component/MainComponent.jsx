import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Menu from "./Menu";
import AboutComponent from "./AboutComponent";
import DishDetail from "./dishDetail";
import ContactComponent from "./ContactComponent";
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { Routes, Route } from "react-router-dom";

export default class MainComponent extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                dish={DISHES.filter((dish) => dish.featured)[0]}
                promotion={PROMOTIONS.filter((promo) => promo.featured)[0]}
                leader={LEADERS.filter((leader) => leader.featured)[0]}
              />
            }
          />
          <Route exact path="/menu" element={<Menu dishes={DISHES} />} />
          <Route path="/menu/:id" element={<DishDetail />} />
          <Route path="/aboutus" element={<AboutComponent leaders={LEADERS} />} />
          <Route path="/contactus" element={<ContactComponent />} />
          <Route
            path="*"
            element={
              <Home
                dish={DISHES.filter((dish) => dish.featured)[0]}
                promotion={PROMOTIONS.filter((promo) => promo.featured)[0]}
                leader={LEADERS.filter((leader) => leader.featured)[0]}
              />
            }
          />
        </Routes>
        <Footer />
      </>
    );
  }
}
