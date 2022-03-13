import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

import React, { useEffect, useState } from 'react'



const ViewRequest = () => {
    const[data,setDate]=useState([])
    useEffect(()=>{
     axios.get('http://localhost:8080/food_donation/donation/viewall')
     .then(res=>{
         console.log("from server",res.data)
        setDate(res.data)
    }).catch(err=>console.log(err))
    },[])
    const requests=data.map((data,index)=>{
        return(
            <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.quantity}</td>
            <td>{data.granted_qty}</td>
            <td>need to be caluclated</td>
            <td>{data.foodtupe_id}</td>
            <td>{data.date}</td>
           
            <td>{data.user_id}</td>
            </tr>
        )
    })
  return (
      <>
      <Header/>
      <Sidebar/>
    
    <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2 ms-5">
        
      <div  className="table table-hover table-bordered ms-5">
        <thead aligh="center">
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Granted Quantity</th>
            <th> Remaining Quantity</th>
            <th> Food Type ID</th>
            <th> Date</th>
            <th>User ID</th>
            </thead>
            <tbody>
                {/* {<tr align="center">
                <td colSpan={9}>No User AVailable</td>
                {users}
                </tr> */}
                {requests}</tbody>
                    </div>
    
       
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content */}
</div>
<Footer/>
</>
    
  )
}

export default ViewRequest