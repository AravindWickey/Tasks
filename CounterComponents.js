import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';


function CounterComponent() {
    const [initial, setState_in_hooks] = useState(5);

    useEffect(() => 
     {
       console.log("@ mounting phase")  
     },[]) 

     useEffect(() => 
     {
       console.log("@ updating phase")  
     },[initial])
   
            
    var Increment = () =>{
        setState_in_hooks(initial+1)
    }
    var Decrement = () =>{
        setState_in_hooks(initial-1)    }
    var reset = ()=>{
        setState_in_hooks(5)    }
    
        return(<>
                <h3>{initial}</h3>
                
                <Button onClick = {Increment} variant="outlined">Increments</Button>
                <Button onClick = {Decrement} variant="outlined">Decrement</Button>   
                <Button onClick = {reset} variant="contained">Reset</Button>   

        </>
        ) 
    }


export default CounterComponent;
