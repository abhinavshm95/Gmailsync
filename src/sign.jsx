import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Sign = () => {
    const [data,setdata]=useState({
        nama:'',
        email:'',
        pass:'',
        co_pass:'',
    })
    const inputevent=(event)=>{
        console.log(event.target.value);
        const {name,value} = event.target
        setdata((pre)=>{
            return{
                ...pre,
                [name]:value            
            }
        })
    }
    const onsubmits=(events)=>{
        events.preventDefault()
        alert('Sucessfully Submited')
        setdata({
            nama:'',
            email:'',
            pass:'',
            co_pass:''
        })
    }

    return (
        <>
            <div className='max-width-1 m-auto' >
                <hr />
            </div>
            <div className='login-form max-width-1 m-auto ' >
                <form action="/signin" onSubmit={onsubmits} >
                    <h1>Hello {data.nama}</h1>
                    <div>
                        <input type="text" placeholder="Name" onChange={inputevent} name='nama'  />
                     </div>
                    <div>
                        <input type="email" placeholder='email' onChange={inputevent} name='email'   />
                    </div>
                    <div>
                        <input type="password" placeholder='Password' onChange={inputevent} name='pass'   />
                    </div>
                    <div>
                        <input type="password" placeholder='Re-enter password' onChange={inputevent} name='co_pass'   />
                    </div>
                    <span className='span-class' >
                        <button className='form-btn' type='submit'  >Signin</button>
                    </span>
                </form>
                        <div className='out-btn' >
                            <NavLink exact to='/login'>Login account</NavLink> 
                        </div>
                            
            </div>
        </>
    )
}

export default Sign
