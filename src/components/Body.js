import { useState } from "react";
import { resListObj } from "../utils/mockData";
import ReasturentCard from "./ReasturentCard";


// let resturantList = 
// [
//   {
//     "card": {
//       "card": {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         "info": {
//           "id": "24981",
//           "name": "Vasista's Srilakshmi",
//           "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/29/d7b91a5c-8830-43ae-ab47-afe89ab70c46_b881b83e-8602-4e33-a2c3-87117c8ca6ca.jpeg",
//           "locality": "Manikonda",
//           "deliveryTime": 25,
//           "areaName": "Shaikpet",
//           "costForTwo": "₹350 for two",
//           "cuisines": [
//             "Biryani",
//             "Chinese",
//             "South Indian",
//             "Andhra",
//             "Tandoori",
//             "Seafood",
//             "Desserts",
//             "Snacks"
//           ],
//           "avgRating": 4.2
//         }
//       }
//     }
//   },
//   {
//     "card": {
//       "card": {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         "info": {
//           "id": "249823",
//           "name": "KFC",
//           "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/29/d7b91a5c-8830-43ae-ab47-afe89ab70c46_b881b83e-8602-4e33-a2c3-87117c8ca6ca.jpeg",
//           "locality": "Manikonda",
//           "areaName": "Shaikpet",
//            "deliveryTime": 25,
//           "costForTwo": "₹350 for two",
//           "cuisines": [
//             "Biryani",
//             "Chinese",
//             "South Indian",
//             "Andhra",
//             "Tandoori",
//             "Seafood",
//             "Desserts",
//             "Snacks"
//           ],
//           "avgRating": 3.2
//         }
//       }
//     }
//   },
//   {
//     "card": {
//       "card": {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         "info": {
//           "id": "2498",
//           "name": "Dominos",
//           "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/29/d7b91a5c-8830-43ae-ab47-afe89ab70c46_b881b83e-8602-4e33-a2c3-87117c8ca6ca.jpeg",
//           "locality": "Manikonda",
//           "areaName": "Shaikpet",
//           "deliveryTime": 25,
//           "costForTwo": "₹350 for two",
//           "cuisines": [
//             "Biryani",
//             "Chinese",
//             "South Indian",
//             "Andhra",
//             "Tandoori",
//             "Seafood",
//             "Desserts",
//             "Snacks"
//           ],
//           "avgRating": 4.5
//         }
//       }
//     }
//   }
// ];

const Body = () => {
let [resturantList,setResturantList] = useState(resListObj);
  return ( <div className="body">
            <div className="search-bar">
              <button onClick={()=>{
                const filterList = resturantList.filter((resData) =>{
                    return (resData.card.card.info.avgRating > 4)
                });
                setResturantList(filterList);
              }}>
              Top Rated</button>
            </div>

            
{/* onClick={() => console.log(resturantList.filter(
    (resData) => resData.card.card.info.avgRating > 4
))} */}


            <div className="res-container">
            {
            resturantList.map((resturant) => (
              <ReasturentCard key ={resturant.card.card.info.id} resData={resturant}/>))
            }
            </div>
  </div>);
}

export default Body;