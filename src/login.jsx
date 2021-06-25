import React from 'react'
const login = () => {
    return (
        <>
            <div className='max-width-1 m-auto' >
                <hr />
            </div>
            <div className='login-form max-width-1 m-auto ' >
                <form action="/login" className='' >
                    <h1>Login Form</h1>
                    <div>
                        <input type="email" placeholder='Username or email' />
                    </div>
                    <div>
                        <input type="password" placeholder='Password' />
                    </div>
                    <span>
                        <button className='form-btn' >Submit</button>
                    </span>
                </form>
            </div>
        </>
    )
}

export default login
