import { furnitureData } from "../data/furniture";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const FurniturePage = () => {
    return(
        <>
        <NavBar/>
        <div className="pageSection" >
            {
                furnitureData.map((item)=>{
                    return(
                        <div className="page-box" key={item.id}>
                            <Link to={`/furniture/${item.id}`}>
                            <div className="pageImg">
                            <img src={item.image} alt="img" />
                            </div>
                            </Link>
                            <div className="proModel">
                                {item.brand}, {item.model}
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <Footer />
        </>
    )
};

export default FurniturePage;