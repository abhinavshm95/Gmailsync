import React, {useState} from 'react'

const Login=() => {
    const [Valu,setvalu] = useState({
        email:'',
        pass:'',
    })
    const inputs=(events)=>{
        const {name,value} = events.target
        setvalu((pre)=>{
            return{
                ...pre,
                [name]:value
            }
        })
    }

    const onsubmits=(event)=>{
        event.preventDefault()
        alert("form submited") 
        setvalu({
            email:'',
            pass :''
        })

    }
    return (
        <>
            <div className='max-width-1 m-auto' >
                <hr />
            </div>
            <div className='login-form max-width-1 m-auto ' >
                <form action="/" className='' onSubmit={onsubmits} >
                    <h1>Hello Welcome </h1>
                    <div>
                        <input type="email" placeholder='Username or email' onChange={inputs} value={Valu.email} name='email' />
                    </div>
                    <div>
                        <input type="password" placeholder='Password' onChange={inputs} value={Valu.pass} name='pass' />
                    </div>
                    <span>
                        <button className='form-btn' type='submit' >Submit</button>
                    </span>
                </form>
            </div>
        </>
    )
}

export default Login
