import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { womanData } from "../data/woman"

const WomanFashionPage = () => {
    return(
        <>
        <NavBar/>
        <div className="pageSection" >
            {
                womanData.map((item)=>{
                    return(
                        <div className="page-box" key={item.id}>
                            <Link to={`/womanfashion/${item.id}`}>
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

export default WomanFashionPage;