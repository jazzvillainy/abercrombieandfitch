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
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60000, gcTime: 10 * (60 * 1000) } },
});

// const firebaseConfig = {
//   apiKey: "AIzaSyCHS4kDVeFRur6B5tEMtMy2Xv_YG2b4bAc",
//   authDomain: "abercrombiebackend.firebaseapp.com",
//   projectId: "abercrombiebackend",
//   storageBucket: "abercrombiebackend.appspot.com",
//   messagingSenderId: "993683861212",
//   appId: "1:993683861212:web:3f232d9a072b8920b48e19",
// };

// const app = initializeApp(firebaseConfig);

// const db = getFirestore();

// const colRef = collection(db, "box");

// getDocs(colRef).then((snapshot) => {
//   // console.log(snapshot.docs);
//   let box = [];
//   snapshot.docs.forEach((doc) => {
//     box.push({ ...doc.data(), id: doc.id });
//   })
//   console.log(box);
  
// }).catch( err => {
//    console.log(err.message);
// })
// const addBoxForm = document.querySelector('.add')

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
