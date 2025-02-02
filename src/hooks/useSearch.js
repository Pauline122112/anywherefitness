import { useEffect, useState } from "react";

const useSearch = (initialData, searchQuery) => {

    const [filteredData, setFilteredData] = useState(initialData);
    const searchTerms = Object.keys(searchQuery);
    const filterCallback = Class => {
        const reducerCallback = (searchedFor, term) => {
            // if that query isnt filled out tehn skip it
            if (!searchQuery[term]) return searchedFor;
            // check if the search term is a string
            if (searchQuery[term] == "") {
                // if they dont match then set the reducer to false
                return Class[term].includes(searchQuery[term]) ? searchedFor : false; // if they do than keep the reducer the same 
            } else { // if its not a string its a number
                // if they dont match then set the reducer to false
                return Class[term] === searchQuery[term] ? searchedFor : false; // if they do than keep the reducer the same 
            }
        }
        // loop through every key and see of the terms match at least partially
        const isSearchedFor = searchTerms.reduce(reducerCallback, true)
        // classes that pass all search querries are included in teh new array
        return isSearchedFor;
    }
    
    useEffect(() => {
        setFilteredData(initialData?.filter(filterCallback))
    }, [searchQuery]);
    

    return filteredData; 
}

export default useSearch;