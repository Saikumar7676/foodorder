import { IMG_URL } from "../Utils/Constant";

const RestauranCard=(props)=>{

    const {resData}=props;
    const{name,areaName,avgRating,costForTwo,slaString}=resData?.info;
return(
    <div className="">
    <div className="hover:bg-gray-100 border border-solid border-b-gray-500 rounded-md p-2 h-96 w-52 shadow-xl mt-5 ml-4">
            <img className="h-48 w-52 bg-slate-200" src=
            {IMG_URL
            +resData.info.cloudinaryImageId}/>
            <h4 className="mt-1 font-semibold">{name}</h4>
            <h5 className="mt-1">{areaName}</h5>
            <h5 className="mt-1">{costForTwo}</h5>
            <h5 className="mt-1">{avgRating}⭐⭐⭐⭐</h5>
            <h5 className="mt-1">{resData.info.sla.slaString}</h5>
            </div>
            
    </div>
)
}

export default RestauranCard;