import React,{useState,useEffect} from 'react'
import SideBar from './Sidebar'
import ProductCard from './ProductCard';
import './../Css/View.css';

const View = () => {
  const [active,setActive] = useState("all");
  const [data,setData] = useState([]);
  useEffect(()=>{
    let fetchData = async ()=>{
      let response = await fetch(`http://localhost:4040/get${active}`,{
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
      <div className='view-cards'>{data.map(ProductCard)}</div>
    </div>
  )
}

export default View
