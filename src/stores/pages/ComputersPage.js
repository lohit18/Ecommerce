import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { computerData } from "../data/computers"

const ComputersPage = () => {
    return(
        <>
        <NavBar/>
        <div className="pageSection" >
            {
                computerData.map((item)=>{
                    return(
                        <div className="page-box" key={item.id}>
                            <Link to={`/computer/${item.id}`}>
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

export default ComputersPage;