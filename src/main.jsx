import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyProvider from "./context/Context.jsx";
import SearchBarContext from "./context/SearchBarContext.jsx";
import CartIdContext from "./context/CartIdContext.jsx";
import CartItemS from "./context/CartItemContext.jsx";
import TotalProv from "./context/CartTotalPrice.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PreviewContextProv from "./context/PreviewDataContext.jsx";
import { AddToCartContextProvider } from "./context/AddToCartContext.jsx";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60000, gcTime: 10 * (60 * 1000) } },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TotalProv>
          <CartItemS>
            <CartIdContext>
              <SearchBarContext>
                <MyProvider>
                  <PreviewContextProv>
                    <AddToCartContextProvider>
                      <App />
                    </AddToCartContextProvider>
                  </PreviewContextProv>
                </MyProvider>
              </SearchBarContext>
            </CartIdContext>
          </CartItemS>
        </TotalProv>
      </QueryClientProvider>
    </StrictMode>
  </React.StrictMode>
);
