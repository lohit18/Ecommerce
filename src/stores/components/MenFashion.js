import {menData} from '../data/men'

const MenFashion = () => {
    const firstFiveImages = menData.slice(0,5);
    return(
       <>
       <div className="proTitle">
       <h2>Men Fashion</h2>
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

export default MenFashion;