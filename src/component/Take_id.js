import React ,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Take_id() {
const [id,setid]=useState('');
const navigate = useNavigate();

    const findemploy=(e)=>{
e.preventDefault();
const url = `http://localhost:3000/data`;

const headers = {
  Authorization: `SSWS 0097tfqHB1X0BwoMdmR4j-yRoGEyFhoGyO0t9UagN3`,
};
let body = {
    id:id
     };
   
   axios.post(url,body)
     .then(response => {
       const data = response.data;
       console.log(response.data[0].id);
       console.log(response.data[0].credentials.recovery_question.question);
       navigate(`/getpswd?q=${response.data[0].credentials.recovery_question.question}&id=${response.data[0].id}`)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });



    }
  return (
    <div>
<input type="text" name="" id="" onChange={(e)=>setid(e.target.value)} />
<button onClick={(e)=>findemploy(e)}>find</button>
    </div>
  )
}

export default Take_id