// import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

import Qty from 'js-quantities'
import { useEffect, useState } from 'react';


const  App = props => {
  
  const typesofunit = Qty.getKinds().slice(1,46)
  const [Selected, setSelected] = useState(false)
  const [Units, setUnits] = useState(["SelectOne",...typesofunit])
  const [firsttype, setfirsttype] = useState()
  const [secondtype, setsecondtype] = useState()
  const [convert, setconvert] = useState({
    fromunit:"",
    tounit:"",
    numberr:"",
  })

  const [result, setresult] = useState({resultt:0})

 


  const handleunittypechange = event =>{

    const unit = event.target.value;

    setUnits(typesofunit)
    setSelected(true)

    setfirsttype(
      Qty.getUnits(unit).map(x=>(
        <option key={x} id={x}>{x}{setconvert(xx=>{
          return{...xx,fromunit:x}
        })}</option>
      ))
    );

    setsecondtype(
      Qty.getUnits(unit).map(x=>(
        <option key={x} id={x}>{x}{setconvert(xx=>{
          return{...xx ,numberr: 0.05, tounit:x}
        })}</option>
      ))
    );
   
 

  }

  const handlehange = (u)=>{
    // let name,value;
    const {name, value } = u.target;
    // name= u.target.name;
    // value = u.target.value;
    u.preventDefault();

    if(Selected ===true){
      setconvert({...convert , [name]:value})
    }
  }

  // const submitchange = ()=>{
   
  // }

  useEffect(()=>{
    const formula = Qty(convert.numberr + convert.fromunit).to(convert.tounit);
    const { scaler }  = formula;
    console.log(formula);
    console.log(convert);
    setresult({resultt : scaler});
    // submitchange()  
  },[convert])

 
  return (
    <>
    <Form>
    <div>

    <Form.Select aria-label="Default select example" name='units' onChange={handleunittypechange} value={{...Units}} >
        {Units.map(id=>{
          return(
            <option key={id} id={id} value={id}>{id}</option>
          )
        })}
        
      </Form.Select>
    </div>
    <div>
  
    <Form.Select  name='fromunit' onChange={handlehange} value={props.fromunit}>
      <option >{Selected? "Select Measurement" : "Select UNit"}</option>
        {firsttype}
    </Form.Select>
   
    <Form.Select  name='tounit' onChange={handlehange} value={props.tounit}>
      <option >{Selected? "Select Measurement" : "Select UNit"}</option>
        {secondtype}
    </Form.Select>
    </div>
    <div>
        <Form.Label>Value:  </Form.Label>
        <input name='numberr' onChange={handlehange} placeholder="Enter value"  ></input>
        {/* <Button variant="primary" type="submit" onSubmit={submitchange}>
        Submit
      </Button> */}
      <output>
          
           Conversion = {convert.numberr >  0.05 ? result.resultt :""}
          
        </output>
      
        
      

    </div>
    </Form>
    </>
    
  );
}

export default App;
