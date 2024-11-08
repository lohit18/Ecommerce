import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import Slider from "../Slider";

const LandingPage = () => {
    return(
        <div>
            <NavBar />
            {/* <Products /> */}
            <Slider />
            <Footer />
        </div>
    )
};

export default LandingPage;