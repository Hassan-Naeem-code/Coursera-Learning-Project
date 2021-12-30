import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Menu from "./Menu";
import AboutComponent from "./AboutComponent";
import DishDetail from "./dishDetail";
import ContactComponent from "./ContactComponent";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const MainComponent = () => {
  const dishes = useSelector(({ storage }) => {
    return storage.dishes;
  });
  const leaders = useSelector(({ storage }) => {
    return storage.leaders;
  });
  const promotions = useSelector(({ storage }) => {
    return storage.promotions;
  });
  console.log('dishes',dishes);
  console.log('leaders',leaders);
  console.log('promotions',promotions);
  return (
    <>
      <Header />
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
        <Route path="/aboutus" element={<AboutComponent leaders={leaders} />} />
        <Route path="/contactus" element={<ContactComponent />} />
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
      <Footer />
    </>
  );
};
export default MainComponent;
