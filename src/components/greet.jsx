import { Card } from 'primereact/card';
import React, { useRef, useState } from 'react'

import { InputText } from 'primereact/inputtext';
import {Button} from 'primereact/button';

import { Toast } from 'primereact/toast';
        
        
const Greet = () => {
    const toast=useRef(null);

    const[state,setState]=useState({msg:''});

    let handlChange=(event)=>{

        setState({...state,msg:event.target.value});
    }

    let showToast=(event)=>{
        event.preventDefault();


        toast.current.show({ severity: 'info', summary: 'Sticky', detail: "Good morning", sticky: true });
        
    }
    
  return (
   <>
    <div className='grid'>
        <div className='col-4'>

            <Card className='bg-black-alpha-20 m-4'>

                <pre>{state.msg}</pre>
                <InputText onChange={handlChange}  value={state.msg} placeholder='message'/>
                <Button label='Greet' onClick={showToast} className='p-button-success ml-2'/>


            </Card>
            <Toast ref={toast} />
        </div>
    </div>
   
   </>
  )
}

export default Greet;