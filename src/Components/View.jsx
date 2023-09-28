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
      
        <ProductCard html='<button>click me</button>' css="
          button {
            padding: 15px 30px;
            font-size: 18px;
            outline: none;
            border: none;
            border-radius: 10px;
            transition: 0.5s;
            background: #1e1e1e;
            color: greenyellow;
            box-shadow: 0 0 10px #363636, inset 0 0 10px #363636;
          }
          
          button:hover {
            animation: a 0.5s 1 linear;
          }
          
          @keyframes a {
            0% {
              transform: scale(0.7, 1.3);
            }
          
            25% {
              transform: scale(1.3, 0.7);
            }
          
            50% {
              transform: scale(0.7, 1.3);
            }
          
            75% {
              transform: scale(1.3, 0.7);
            }
          
            100% {
              transform: scale(1, 1);
            }
          }
        "/>
        <ProductCard html='<div class="spinner">
            <div class="spinnerin"></div>
            </div>' css='.spinner {
              width: 3em;
              height: 3em;
              cursor: not-allowed;
              border-radius: 50%;
              border: 2px solid #444;
              box-shadow: -10px -10px 10px #6359f8, 0px -10px 10px 0px #9c32e2, 10px -10px 10px #f36896, 10px 0 10px #ff0b0b, 10px 10px 10px 0px#ff5500, 0 10px 10px 0px #ff9500, -10px 10px 10px 0px #ffb700;
              animation: rot55 0.7s linear infinite;
            }
            
            .spinnerin {
              border: 2px solid #444;
              width: 1.5em;
              height: 1.5em;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            
            @keyframes rot55 {
              to {
                transform: rotate(360deg);
              }
            }
            '/>
    </div>
  )
}

export default View
