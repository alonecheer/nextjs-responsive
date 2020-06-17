import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Router from 'next/router'
import Toprint from './toprint';
import Testpass from './testpass'
const Input = () => {
const [email,setEmail] = useState('')
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    //console.log('email',values.email);
    const change = (JSON.stringify(values))

    setEmail(change)
    console.log('email',change);
  };
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="email"
        ref={register}
      />

      <input
        name="username"
        ref={register}
      />
       
      <button type="submit">Submit</button>
    </form>
  
        </div>
    )
}
export default Input