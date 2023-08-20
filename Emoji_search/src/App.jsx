import './App.css'
import emoji from './emoji.json'
import { useState } from 'react'

function App() {
const [search, setSearch] = useState('')
 let item = emoji.filter((e)=>{
   return e.title.includes(search)
 }).map((e,index)=>{
   return(
     <div style={{border:'1px solid grey',marginTop:'10px',padding:'10px'}} key={index}>
       {e.symbol}
       {e.title}
     </div>
   )
 })
  return (
    <>
  <div style={{textAlign:"center"}}>
    <h1>Emoji Search</h1>
    <input style={{padding:'7px',width:'50%'}} type="text" placeholder='search..' onChange={(e)=>setSearch(e.target.value)} value={search}/>
  </div>
      {name.english}  
    <div>
      {item}
    </div>
    </>
  )
}

export default App;