import React, { useState } from 'react';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';


function Counter() {

    const[count,setCount]=useState({counter:0});

    let btnIncrment=(event)=>{
      setCount({
        ...count,
        counter:count.counter+1
      })


    }

    let btnDecrement=()=>{

      setCount({...count, counter:count.counter>0?count.counter-1:0});
     


    }

        
        
  return (
    <div className='grid'>
      <div className='col-4'>
        <Card className='m-3 shadow-5'>

          <h2>{count.counter}</h2>

           <Button label={"Increment"} onClick={btnIncrment} className='p-button-success mr-2'/>
           <Button label={"Decrement"} onClick={btnDecrement} className='p-button-warning'/>
        </Card>
       
        
       
        
      </div>
        
    </div>
  )
}

export default Counter;