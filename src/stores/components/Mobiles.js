import {mobileData} from '../data/mobiles'

const Mobiles = () => {
    const firstFiveImages = mobileData.slice(0,5);
    return(
       <>
       <div className="proTitle">
       <h2>Mobiles</h2>
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

export default Mobiles;