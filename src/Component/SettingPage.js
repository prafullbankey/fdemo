import React, { useEffect, useState } from 'react'
import axios from 'axios'; 

 const SettingPage = () => {
const [ data ,setData] =useState([]) 

  useEffect(() =>{
    axios.get ("https://reqres.in/api/users?page=2")
    .then( res => {
      console.log("hiiii",res.data)
      setData(res?.data ?.data)
    })
.catch( erre => {
  alert("something is wrong")
})

  }, [])
  if( data.length <= 0 ){
    return ;
  }

  return (
    <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
               
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>

            </tr>
        </thead>
      {
      
        data.map((item)=>{
          return (
            <tr>
               <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td><img src={item.avatar} alt='img'/></td>
            </tr>
          )
        })
      }
     </table>

    </div>
  )
}
export default SettingPage