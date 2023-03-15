import {useState} from 'react';
import './App.css';

function Form (){
    
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    // const [alert,setAlert] = useState(false);

    const [FirstNameError , setFirstNameError] = useState(false);
    const [LastNameError,setLastNameError] = useState(false);
    const [EmailError,setEmailError] = useState(false);
    const [PhoneError,setPhoneError] = useState(false);


    let regName = /\d/;
    let regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;
    let regSplchar = (/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/);
    let regPhone =(/^\d+$/);


    const submitHandler = (event) => {
        event.preventDefault();

        if(firstname === "" || regName.test(firstname) || regSplchar.test(firstname)){
            setFirstNameError(true);
        }else{
            setFirstNameError(false);
        }

        if(lastname === '' || regName.test(lastname) || regSplchar.test(lastname)){
            setLastNameError(true);
        }else{
            setLastNameError(false);
        }

        if(email === '' || regEmail.test(email)){
            setEmailError(true);
        }else{
            setEmailError(false);
        }

        if(phone === '' || !regPhone.test(phone)){
            setPhoneError(true);
        }else{
            setPhoneError(false);
        }
        

    }


    return(
        <div className='main'>
        
            
            <h1 className='header'>Registration Form</h1>

            <form className='form' onSubmit={submitHandler}>
                <input type="text" className="inputs" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} required></input>
                { FirstNameError ? <span className='errors' style={{color:'red'}}>Enter a valid first name</span> : ''}

                <input type="text" className="inputs" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} required></input>
                { LastNameError ? <span className='errors' style={{color:'red'}}>Enter a valid last name</span> : ''}
                
                <input type="email" className="inputs" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required></input>
                { EmailError ? <span className='errors' style={{color:'red'}}>Enter a valid Email</span> : ''}

                <input type="tel" className="inputs" placeholder="Mobile Number" onChange={(e) => setPhone(e.target.value)} required></input>
                { PhoneError ? <span className='errors' style={{color:'red'}}>Enter a valid number</span> : ''}

                <button className='btn' >Submit</button>
            
            </form>
            
        </div>


    )
}

export default Form;