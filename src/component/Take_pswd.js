import React, { useState } from 'react'
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
function Take_pswd() {
    let [searchParams, setSearchParams] = useSearchParams();
    const [ans,setAns]=useState('');
    const [pswd,setpswd]=useState('');

    var id = searchParams.get("id");
    var r_question = searchParams.get("q");
console.log(id,r_question);
const C_pswd=(e)=>{
e.preventDefault();
console.log(id,r_question,ans);
const url = `http://localhost:3000/change_pswd`;


let body = {
    id:id,
    r_q:ans,
    pswd:pswd
     };
   
   axios.post(url,body)
     .then(response => {
       
  console.log(response);
  alert(response.data);

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}
  return (
    <div>

<h3>
{r_question}

</h3>
<input type="text" name="" id="" placeholder='Answer' onChange={(e)=>setAns(e.target.value)} />
<br />
<input type="text" name="" id="" placeholder='Password' onChange={(e)=>setpswd(e.target.value)} />
<br />
<button onClick={(e)=>C_pswd(e)}>change Password</button>


    </div>
  )
}

export default Take_pswd