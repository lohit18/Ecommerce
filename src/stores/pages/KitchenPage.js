import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { kitchenData } from "../data/kitchen"

const KitchenPage = () => {
    return(
        <>
        <NavBar/>
        <div className="pageSection" >
            {
                kitchenData.map((item)=>{
                    return(
                        <div className="page-box" key={item.id}>
                            <Link to={`/kitchen/${item.id}`}>
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

export default KitchenPage;