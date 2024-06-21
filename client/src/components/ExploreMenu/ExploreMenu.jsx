import  { useContext,useRef } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);
const scrollAmount=100
const menuListRef = useRef(null);
 
    const handleRightArrow = () => {
      if (menuListRef.current) {
        menuListRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
    const handlelefttArrow = () => {
      if (menuListRef.current) {
        menuListRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  
  
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Select Food Categories</h1>
      <div className="explore-menu-list" ref={menuListRef}>
        <button onClick={()=>setCategory("All")} className='btn btn-outline-danger btnx'>All categories</button>
      <ArrowCircleLeftIcon onClick={handlelefttArrow} className='arrow-left'/>
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
       
      </div>
      <ArrowCircleRightIcon onClick={handleRightArrow} className='arrow-right' />
      <hr />
    </div>
  )
}

export default ExploreMenu
