import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./Menu";
import { ContactComponent } from "./ContactComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { Routes, Route } from "react-router-dom";

export default class MainComponent extends Component {
  render() {
    return (
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
        <Route path="/menu" element={<Menu dishes={DISHES} />} />
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
    );
  }
}
