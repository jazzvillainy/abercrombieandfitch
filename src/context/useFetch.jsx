import { useQuery } from "@tanstack/react-query";
import { useState } from "react"; 
import { useEffect } from "react";
import { PreviewContext } from "../context/PreviewContext";

 const useFetch = (url, key) => {
    // const [itemData, setItemData] = useState([]);
    // const [IsLoading, setIsLoading] = useState(true);
    const {
      data: itemData,
      isLoading: IsLoading,
      error: error,
    } = useQuery({
      queryKey: [key],
      queryFn: () =>
        fetch(url).then((res) => {
          // console.log(res);

          return res.json();
        }),
      // staleTime: 6000,
    });
    return { itemData, IsLoading, error };


  }
  export default useFetch
  
  
// useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((res) => {
        
//         setItemData(res);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);