import {useState} from 'react';
import './App.css';

function Form (){

    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [FirstNameError , setFirstNameError] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return(
        <div className='main'>
            <h1 className='header'>Registration Form</h1>

            <form className='form'onSubmit={submitHandler}>
                <input type="text" className="inputs" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} required></input>
                <input type="text" className="inputs" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} required></input>
                <input type="email" className="inputs" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required></input>
                <input type="password" className="inputs" placeholder="PassWord" onChange={(e) => setPassword(e.target.value)} required></input>

                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form;