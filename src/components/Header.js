import { LOGO_URL } from "../Utils/Constant";

const Header=()=>{
    return(
        <div className="head">
        <div className="logo-con ">
           <img 
           className="logo" 
           src={LOGO_URL}/>
        </div>
        <div className="nav">
            <ul>
                <h1>Home</h1>
                <h1>About Us</h1>
                <h1>Offers</h1>
                <h1>Cart🛒</h1>
            </ul>
        </div>
        <div>
            <img className="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALoBW0lx1uNWtPPnaD8B3IzpV3Ij0ns4cEA&s"/>
        </div>

        </div>
    )
}

export default Header;