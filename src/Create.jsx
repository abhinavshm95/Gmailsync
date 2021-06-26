import React, { useState } from 'react'

const Create = () => {

    const [data,setdata] = useState({
        to:'',
        cc:'',
        subject:'',
        recurring:'',
        weekly:'',
        monthly:'',
        yearly:'',
    })

    const inputevent=(event)=>{
        console.log(data);
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
        alert("form submited") 
        setdata({
            to:'',
            cc:'',
            subject:'',
            weekly:'',
            monthly:'',
            yearly:'',
        })
    }

    return (
        <>
            <div className='max-width-1 m-auto' >
                <hr />
            </div>
            <div className='create-form max-width-1 m-auto' >
                <form action="/create" onSubmit={onsubmits} >
                    <h1>Gmail</h1>
                    <div className='text' >
                        <label htmlFor="to"></label>
                        <input type="text" id='to' onChange={inputevent} name='to' placeholder='To' value={data.to} />
                    </div>
                    <div className='text' >
                        <label htmlFor="cc"></label>
                        <input type="text" id='cc' onChange={inputevent} name='cc' placeholder='CC' value={data.cc} />
                    </div>
                    <div className='text' >
                        <input type="text" id='subject' onChange={inputevent} name='subject' placeholder='Subject' value={data.subject} />
                    </div>
                    <div className='radio-class' >
                        <div>
                        <input type="checkbox" onChange={inputevent}  name='recurring'  id='rec' value={data.recurring} />
                        <label htmlFor="rec">Recurring schedule</label>
                        </div>
                        <div>
                        <input type="checkbox" onChange={inputevent}  name='weekly' id='wek' value={data.weekly} />
                        <label htmlFor="wek">Weekly schedule</label>
                        </div>
                        <div>
                        <input type="checkbox" onChange={inputevent}  name='monthly' id='mon' value={data.monthly} />
                        <label htmlFor="mon">Monthly schedule</label>
                        </div>
                        <div>
                        <input type="checkbox" onChange={inputevent} name='yearly' id='yea' value={data.yearly} />
                        <label htmlFor="yea">Yearly schedule</label>
                        </div>
                    </div>
                    <div className='text-class' >
                        <textarea name="body"  cols="10" rows="5"></textarea>
                    </div>
                    <div className='btn-class' >
                        <button type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Create
