import { useState, useEffect } from "react";
import { resListObj } from "../utils/mockData";
import ReasturentCard from "./ReasturentCard";
import Shimmer from "./Shimmer";


const Body = () => {
const [resturantList,setResturantList] = useState([]);
const [filterResturantList,setFilterResturantList] = useState([]);
const [search,setSearch] = useState([]);
useEffect(() => {
    fetchData();
        }, []);
console.log("body");
const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4027233&lng=78.37731269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setResturantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilterResturantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
}

if(resturantList.length === 0) {
return <Shimmer />;
}
  return ( <div className="body">
            <div className="filter-container">
              <div className="top-rated"><button onClick={()=>{
                const filterList = resturantList.filter((resData) =>{
                    return (resData.info.avgRating > 4)
                });
                setResturantList(filterList);
              }}>
              Top Rated</button></div>
              <div className="search-container">
                <input type="text" 
                className="search-box" 
                value={search} 
                onChange={(e)=>setSearch(e.target.value)}/>
                <button onClick ={()=> {
                     const filterResSearch = resturantList.filter((resData)=>{
                        return  resData?.info?.name?.toLowerCase().includes(search.toLowerCase())
                     })
                       setFilterResturantList(filterResSearch);
                    }}
                    >
                    Search
                </button>
              </div>


            </div>

            <div className="res-container">
            {
            filterResturantList.map((resturant) => (
              <ReasturentCard key ={resturant.info.id} resData={resturant}/>))
            }
            </div>
  </div>);
}

export default Body;