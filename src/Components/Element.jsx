import React,{useState,useEffect} from 'react'
import SideBar from './Sidebar'
import ProductCard from './ProductCard';
import './../Css/Element.css';

const Element = () => {
  const [active,setActive] = useState("All");
  const [data,setData] = useState([]);
  
  const item = active.replace(' ','');
  useEffect(()=>{
    let fetchData = async ()=>{
      let response = await fetch(`http://localhost:4040/get${item}`,{
        method : 'GET',
        body : JSON.stringify(),
        headers : {
          'Content-Type' : "application/json"
        }
      })
      let responseData = await response.json();
      setData(responseData.data);
      console.log(responseData.data);
    }
    fetchData();

  },[active]);
   return (
    <div className='view'>
        <SideBar active={active} setActive={setActive}/>
          <div className='view-cards-main-frame'>
            <div className='view-top-navbar'>
                <h1 className='view-heading'>{active}</h1>
            </div>
               <div className='cards'>
                  {data.map(ProductCard)}
                </div> 
          </div>
    </div>
  )
}

export default Element
