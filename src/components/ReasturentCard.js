import {CDN_RESTURANT_URL} from "../utils/constants"
const ReasturentCard = ({resData}) => {


  const {name, cuisines,cloudinaryImageId,avgRating,sla} = resData.info;

  return(

    <div className="res-card">
      <img className="res-img"
      src={CDN_RESTURANT_URL + cloudinaryImageId}>
      </img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime}Mintues</h4>
    </div>
  );
}

export default ReasturentCard;