import "./App.css";

import { useState } from "react";

import Page from "./components/Page/Page";
import Home from "./pages/Home/Home";
import Base from "./pages/Base/Base";
import Toppings from "./pages/Toppings/Toppings";
import Order from "./pages/Order/Order";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Modal from "./components/Modal/Modal";
import OrderModal from "./components/modals/OrderModal/OrderModal";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page />,
      errorElement: <div>Oops!</div>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/base",
          element: <Base addBase={addBase} pizza={pizza} />,
        },
        {
          path: "/toppings",
          element: <Toppings addTopping={addTopping} pizza={pizza} />,
        },
        {
          path: "/order",
          element: <Order pizza={pizza} setShowModal={setShowModal} />,
        },
      ],
    },
  ]);
  return (
    <>
      <OrderModal showModal={showModal} setShowModal={setShowModal} />
      {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
