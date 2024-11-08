import {furnitureData} from '../data/furniture'

const Furniture = () => {
   const firstFiveImages = furnitureData.slice(0,5);
    return(
        <>
        <div className="proTitle">
        <h2>Furniture</h2>
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

export default Furniture;