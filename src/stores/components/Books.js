import {booksData} from '../data/books'

const Books = () => {
   const firstFiveImages = booksData.slice(0,5);
    return(
        <>
        <h2>Books</h2>
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

export default Books;