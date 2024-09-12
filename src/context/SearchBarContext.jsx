import { createContext, useState } from "react";

export const SearchContext = createContext("")

export default function SearchBarContext({children}){
    const [showSearchBar, setShowSearchBar] = useState(false)

    return (
      <SearchContext.Provider value={{ showSearchBar, setShowSearchBar }}>
        {children}
      </SearchContext.Provider>
    );

}