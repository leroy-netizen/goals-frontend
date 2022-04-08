import React from 'react'
import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const {name, email, password, password2 } = formData;
    const onChange =(e) => {
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }


  return (
    <>
    <section className='heading'>
        <h1>
            <FaUser /> Register
        </h1>
        <p> Please create an account</p>

        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input type="text" className="form-control" id='name' name='name' value={name} placeholder="Please enter your name" onChange={onChange}/>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" id='email' name='email' value={email} placeholder="Please enter your email" onChange={onChange}/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id='password' name='password' value={name} placeholder="Please enter your password" onChange={onChange}/>
            </div>
            <div className="form-group">
                <input type="passwordConfirm" className="form-control" id='passwordConfirm' name='passwordConfirm' value={name} placeholder="Confirm passord" onChange={onChange}/>

            </div>
            <div className="form-group">
                <button type='submit' className='btn btn-block'>Submit</button>
            </div>
        </form>
    </section>
    </>
  )
}

export default Register