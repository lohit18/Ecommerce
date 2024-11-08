import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { mobileData } from "../data/mobiles"
import Footer from "../components/Footer";

const MobilePage = () => {
   
     return(
        <>
        <NavBar/>
        {/* Images */}
        <div className="pageSection" >
            {
                // mobileData
                mobileData.map((item)=>{
                    return(
                        <div className="page-box" key={item.id}>
                            <Link to={`/mobile/${item.id}`}>
                            <div className="pageImg">
                            <img src={item.image} alt="img" />
                            </div>
                            </Link>
                            <div className="proModel">
                                {item.company}, {item.model}
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

export default MobilePage;