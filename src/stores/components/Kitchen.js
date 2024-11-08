import {kitchenData} from '../data/kitchen'

const Kitchen = () => {
   const firstFiveImages = kitchenData.slice(0,5);
    return(
        <>
        <div className="proTitle">
        <h2>Kitchen</h2>
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

export default Kitchen;