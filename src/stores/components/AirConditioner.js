import {acData} from '../data/ac'

const AirConditioner = () => {
   const firstFiveImages = acData.slice(0,5);
    return(
        <>
        <div className="proTitle">
        <h2>Air Conditioners</h2>
        </div>
        <div className="proSection">
            {
               firstFiveImages.map((item)=>{
                return(
                    <div className="imgBox">
                    <img className='proImg' src={item.image} alt="img"></img>
                </div>
                )
               })
            }
        </div>
        </>
    )
};

export default AirConditioner;