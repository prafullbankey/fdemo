import React,{useState,useEffect} from 'react'
import axios  from 'axios'

 const AboutPage = () => {
  const [ data ,setData] =useState([]) 

  useEffect(() =>{
    axios.get ("https://reqres.in/api/unknwon")
    .then( res => {
      console.log(res.data)
      setData(res?.data ?.data)
    })
.catch( erre => {
  alert("something is wrong")
})

  }, [])

  return (
     
    <div>
        
        <div>
          <h1 className=' text-rose-900'> OUR RESCOURCES</h1>
        </div>
  
      <table>
      
          <tr>
            <th scope="col" class="px-6 py-4">ID</th>
            <th scope="col" class="px-6 py-4">NAME</th>
            <th scope="col" class="px-6 py-4">YEAR</th>
            <th scope="col" class="px-6 py-4">COLOUR</th>
            <th scope="col" class="px-6 py-4">PNTONE VALUE</th>

          </tr>
        
        
        {
        data.length > 0 && 
        data.map((item)=>{
          return (
              <tr>
            
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.year}</td>
              <td>{item.color}</td>
              <td>{item.pantone_value}</td>
            
                </tr>
          )
        })
      }
      
      </table>
    


</div>

  )
}
export default AboutPage
