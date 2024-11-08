import {womanData} from '../data/woman';

const WomanFashion = () => {
    const firstFiveImages = womanData.slice(0,5);
    return(
        <>
        <div className="proTitle">
        <h2>Woman Fashion</h2>
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

export default WomanFashion;