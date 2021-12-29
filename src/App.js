import React,{useState,useEffect} from 'react';
import './App.css';

const App=()=>{

  const [fake,setFake]=useState([]);
  console.log(fake);
  useEffect(()=>{
    fakestore();
  },[])


  const fakestore=async()=>{
    const response=await fetch("https://fakestoreapi.com/products/categoy/men's clothing");
   // console.log(response)
    const productdata=await response.json();
   // console.log(productdata)
   setFake(productdata);
  }
 
    return( 
      
        <>
        
        <h2>Fake Store API</h2>
        <div className="container">
          {fake.map((values)=>{
            return(
              <>
               <div className="box">
            <div className="content">
              <h5>{values.title}</h5>
              <p>{values.description}</p>
            </div>
            <img src={values.image} alt=""/>
            <h2>RS</h2><h2>{values.price}</h2>
            <h2>{values.category}</h2>
           
        </div>
               </>
            )
          })}
         
        </div>
       
        
        </>
    )
} 
export default App;