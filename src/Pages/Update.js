import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function StaticExample() {
    const [data, setdata] = useState({
        id:"",
        name:"",
        dept:"",
        salart:"",
        experience:''

    })
     
    const postData = async (id)=>{
          const api =  await fetch(`http://localhost:8000/updateuser/${id}`,{
            method:"Put",
            headers:{
              
                'content-type':'application/json'
            },
            body : JSON.stringify(data)
            

        })
        const res = await api.json()
        console.log(res)
    }
    const handleinput = (e)=>{
            e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        // console.log(name,value)
        setdata({
        ...data,
            [name]:value
        })
        

    }

    
  return (
   <>
      <Form style={{marginTop:"30px",width:"30%",marginLeft:"20px"}}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Company Id</Form.Label>
           <Form.Control type="text" name ="id" value = {data.id} placeholder="Enter id" onChange={handleinput} />
           </Form.Group>      
           <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Name</Form.Label>
           <Form.Control type="text" name="name" value ={data.name} placeholder="Enter Name"  onChange={handleinput}/>
           </Form.Group> 
           <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Department</Form.Label>
           <Form.Control type="text" name="dept" value={data.dept} placeholder="Enter Department" onChange={handleinput} />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Salary</Form.Label>
           <Form.Control type="text" placeholder="Enter Salary" name="salart" value={data.salart} onChange={handleinput} />
           </Form.Group>  
           <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Exeperience</Form.Label>
           <Form.Control type="text" placeholder="Enter your Experience" name="experience" value={data.experience} onChange={handleinput}/>
           </Form.Group>      
          <Button variant="primary" type="submit" onClick={postData}>
           Submit
         </Button>
       </Form>
     
     
  
   </>
      
       
  );
}

export default StaticExample;