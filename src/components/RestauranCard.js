import { IMG_URL } from "../Utils/Constant";

const RestauranCard=(props)=>{

    const {resData}=props;
    const{name,cuisines,avgRating,costForTwo}=resData?.info;
return(
    <div className="rescard">
            <img className="Cardimg" src=
            {IMG_URL
            +resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}⭐</h4>
            
    </div>
)
}

export default RestauranCard;