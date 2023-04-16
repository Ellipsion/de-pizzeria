import "./App.css";

import { useState } from "react";

import Home from "./pages/Home/Home";
import Base from "./pages/Base/Base";
import Toppings from "./pages/Toppings/Toppings";
import Order from "./pages/Order/Order";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

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
      element: <Home />,
      errorElement: <div>Oops!</div>,
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
      element: <Order pizza={pizza} />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
