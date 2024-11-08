import {computerData} from '../data/computers'

const Computers = () => {
   const firstFiveImages = computerData.slice(0,5);
    return(
        <>
        <div className="proTitle">
        <h2>Computers</h2>
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

export default Computers;