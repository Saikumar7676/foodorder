import { IMG_URL } from "../Utils/Constant";

const RestauranCard=(props)=>{

    const {resData}=props;
    const{name,areaName,avgRating,costForTwo,slaString}=resData?.info;
return(
    <div className="rescard">
            <img className="Cardimg" src=
            {IMG_URL
            +resData.info.cloudinaryImageId}/>
            <h4>{name}</h4>
            <h5>{areaName}</h5>
            <h5>{costForTwo}</h5>
            <h5>{avgRating}⭐⭐⭐⭐</h5>
            <h5>{resData.info.sla.slaString}</h5>
            
    </div>
)
}

export default RestauranCard;