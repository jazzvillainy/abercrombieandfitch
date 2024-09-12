import {
  createHashRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import React from "react";
import Active from "./layout/pages/Jewelry";
import Electronics from "./layout/pages/Electronics";
import Womens from "./layout/pages/Womens";
import Body from "./layout/pages/Body";
import Men from "./layout/pages/Men";
import SignUp, { signUpAction } from "./components/navbar/signup";
import CheckoutPage from "./layout/pages/CheckoutPage";
import NotFound from "./layout/pages/NotFound";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Body />} />
      <Route path="Men" element={<Men />} />
      <Route path="womens" element={<Womens />} />
      <Route path="electronics" element={<Electronics />} />
      <Route path="jewelry" element={<Active />} />
      <Route path="signup" element={<SignUp />} action={signUpAction}/>
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
