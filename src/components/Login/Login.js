// import React from 'react'
// import Lottie from 'lottie-react';
// import Loginlogo from '../../Assets/Login.json';
// import { useState } from 'react';
// import '../../styles/Login.css';
// export default function Login() {
//     const [isToggled, setIsToggled] = useState(false);

//     // Function to handle the toggle
//     const handleToggle = () => {
//         setIsToggled(prevState => !prevState);
//     };
//     return (
//         <div className='MainLogin'>
//             <div className='loginBox'>
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                     <div className={`toggle-container ${isToggled ? 'is-toggled' : ''}`} onClick={handleToggle}>
//                         <div className="toggle-background"></div>
//                         <div className={`toggle-option ${!isToggled ? 'selected' : ''}`}>Sign UP</div>
//                         <div className={`toggle-option ${isToggled ? 'selected' : ''}`}>Login</div>
//                     </div>
//                 </div>
//                 {
//                     isToggled ?
//                     <div style={{display:'flex',justifyContent:'space-around', alignItems:'center'}}>
//                 <Lottie animationData={Loginlogo} loop={false} style={{ height: '50vh', width: '50vh' }} />
//                 <div style={{width:'50vh'}}>
//                     <input className='inputBox' type='text' placeholder='Name' />
//                     <input className='inputBox' type='email' placeholder='Email' />
//                     <input className='inputBox' type='password' placeholder='Password' required/>
//                     <input className='inputBox' type='password' placeholder='Confirm Password' required/>
//                     <div style={{color:'blue', padding:'10px', border:'1px solid blue', display:'inline-block', borderRadius:'20px', cursor:'pointer'}}>Submit</div>
//                 </div>
//                 </div>

//                 :
//                 <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
//                 <div style={{ width: '50vh' }}>
//                     <input className='inputBox' type='text' placeholder='Name' />
//                     <input className='inputBox' type='email' placeholder='Email' />
//                     <input className='inputBox' type='password' placeholder='Password' required />
//                     <input className='inputBox' type='password' placeholder='Confirm Password' required />
//                     <div style={{ color: 'blue', padding: '10px', border: '1px solid blue', display: 'inline-block', borderRadius: '20px', cursor: 'pointer' }}>Submit</div>
//                 </div>
//                 <Lottie animationData={Loginlogo} loop={false} style={{ height: '50vh', width: '50vh' }} />

//             </div>
//                 }
                
               
//             </div>
//         </div>
//     )
// }


// import React from 'react';
// import Lottie from 'lottie-react';
// import Loginlogo from '../../Assets/Login.json';
// import { useState } from 'react';
// import '../../styles/Login.css';

// export default function Login() {
//     const [isToggled, setIsToggled] = useState(false);

//     // Function to handle the toggle
//     const handleToggle = () => {
//         setIsToggled(prevState => !prevState);
//     };

//     return (
//         <div className='MainLogin'>
//             <div className='loginBox'>
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                     <div className={`toggle-container ${isToggled ? 'is-toggled' : ''}`} onClick={handleToggle}>
//                         <div className="toggle-background"></div>
//                         <div className={`toggle-option ${!isToggled ? 'selected' : ''}`}>Sign UP</div>
//                         <div className={`toggle-option ${isToggled ? 'selected' : ''}`}>Login</div>
//                     </div>
//                 </div>
//                 <div className={`form-container ${!isToggled ? 'active' : ''}`}>
//                     <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
//                         <Lottie animationData={Loginlogo} loop={false} style={{ height: '50vh', width: '50vh' }} />
//                         <div style={{ width: '50vh' }}>
//                             <input className='inputBox' type='text' placeholder='Name' />
//                             <input className='inputBox' type='email' placeholder='Email' />
//                             <input className='inputBox' type='password' placeholder='Password' required />
//                             <input className='inputBox' type='password' placeholder='Confirm Password' required />
//                             <div style={{ color: 'blue', padding: '10px', border: '1px solid blue', display: 'inline-block', borderRadius: '20px', cursor: 'pointer' }}>Submit</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={`form-container ${isToggled ? 'active' : ''}`}>
//                     <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
//                         <div style={{ width: '50vh' }}>
//                             <input className='inputBox' type='text' placeholder='Name' />
//                             <input className='inputBox' type='email' placeholder='Email' />
//                             <input className='inputBox' type='password' placeholder='Password' required />
//                             <input className='inputBox' type='password' placeholder='Confirm Password' required />
//                             <div style={{ color: 'blue', padding: '10px', border: '1px solid blue', display: 'inline-block', borderRadius: '20px', cursor: 'pointer' }}>Submit</div>
//                         </div>
//                         <Lottie animationData={Loginlogo} loop={false} style={{ height: '50vh', width: '50vh' }} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



// import React from 'react';
// import Lottie from 'lottie-react';
// import Loginlogo from '../../Assets/Login.json';
// import { useState } from 'react';
// import {useNavigate} from 'react-router-dom'
// import '../../styles/Login.css';
// import alertIcon from '../../Assets/icons/alerticon.svg';
// import GoogleOAuthIcon from '../../Assets/icons/google.svg';
// import axios from 'axios';
// import Avatar from './Avatar';
// export default function Login() {
//     const [isToggled, setIsToggled] = useState(false);
//     const [name,setName] =useState();
//     const [email,setMail] =useState();
//     const [Password,setPassword] =useState();
//     const [confirmPass,setconfirmPass] =useState();
// const [error,setError] =useState();

// const navigate = useNavigate();
//     const handleToggle = () => {
//         setError();
//         setIsToggled(prevState => !prevState);
//     };

//     const handleSignup =()=>{
//         setError();
//         if(!name||!email||!Password||!confirmPass){
//            return setError('Everything is Required')
//         }
//         if(Password !== confirmPass){
//             return setError('Password does not match');
//         }
//         const values ={
//             name:name,
//             email:email,
//             Password:Password,
//             confirmPass:confirmPass
//         }
//         axios({
//             method:'POST',
//             url:'http://localhost:5000/signup',
//             data:values,

//         }).then(res=> {localStorage.setItem("Token",res.data.Token);navigate('/post')}).catch(err=>{ if (err.response) {
//             setError(err.response.data); 
//         } else {
//             setError("Something went wrong");
//         }})
//     }

//     const handleLogin =()=>{
//         setError();

//         if(!email||!Password){
//             return setError('Everything is Required')
//          }
//          const values ={
//             email:email,
//             Password:Password,
//         }
//         axios({
//             method:'POST',
//             url:'http://localhost:5000/login',
//             data:values,

//         }).then(res=> {localStorage.setItem("Token",res.data.Token);navigate('/')}).catch(err=>{ if (err.response) {
//             setError(err.response.data); 
//         } else {
//             setError("Something went wrong");
//         }})
//     }

//     const guest=()=>{
//         localStorage.setItem("Token",'Guest');
//         navigate('/')
//     }
//     return (
//         <div className='MainLogin'>
//             <div className='loginBox'>
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                     <div className={`toggle-container ${isToggled ? 'is-toggled' : ''}`} onClick={handleToggle}>
//                         <div className="toggle-background"></div>
//                         <div className={`toggle-option ${!isToggled ? 'selected' : ''}`}>Sign UP</div>
//                         <div className={`toggle-option ${isToggled ? 'selected' : ''}`} >Login</div>
//                     </div>
//                 </div>
//                 {!isToggled ? (
//                     <div className="form-container active">
//                         <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
//                             <Lottie className="lottie" animationData={Loginlogo} loop={false} style={{ height: '50vh', width: '50vh' }} />
//                             <div style={{ width: '50vh' }}>
//                                 {error ? <div className='errorbox' style={{}}><img src={alertIcon} alt='' className='errorMessageicon'/>{error}</div> : null}
//                                 <input className='inputBox' type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
//                                 <input className='inputBox' type='email' placeholder='Email' value={email} onChange={(e)=>setMail(e.target.value)}/>
//                                 <input className='inputBox' type='password' placeholder='Password' required value={Password} onChange={(e)=>setPassword(e.target.value)}/>
//                                 <input className='inputBox' type='password' placeholder='Confirm Password' required value={confirmPass} onChange={(e)=>setconfirmPass(e.target.value)}/>
//                                 <div style={{display:'flex', alignItems:'center'}}>
//                                      <div className='loginSubmit' style={{ marginRight:'20px'}} onClick={()=>null} ><img src={GoogleOAuthIcon} alt='' style={{height:'1.5rem', width:'1.5rem'}}/></div>
//                                      <div className='loginSubmit' style={{ marginRight:'20px'}} onClick={()=>guest()} >Guest</div>
//                                      <div className='loginSubmit' onClick={()=>handleSignup()} >SignUp</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="form-container active">
//                         <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
//                             <div style={{ width: '50vh' }}>
//                                 {/* <input className='inputBox' type='text' placeholder='Name' /> */}
//                                 {error ? <div className='errorbox' style={{}}><img src={alertIcon} alt='' className='errorMessageicon'/>{error}</div> : null}

//                                 <input className='inputBox' type='email' placeholder='Email' value={email} onChange={(e)=>setMail(e.target.value)}/>
//                                 <input className='inputBox' type='password' placeholder='Password' required value={Password} onChange={(e)=>setPassword(e.target.value)}/>
//                                 {/* <input className='inputBox' type='password' placeholder='Confirm Password' required /> */}
//                                 <div className='loginSubmit' style={{ marginRight:'20px'}} onClick={()=>null} ><img src={GoogleOAuthIcon} style={{height:'1.5rem', width:'1.5rem'}}/></div>
//                                 <div className='loginSubmit'  onClick={()=>guest()} >Guest Mode</div>
//                                 <div  className='loginSubmit' style={{ marginLeft:'20px'}} onClick={()=>handleLogin()}>Login</div>

//                             </div>
//                             <Lottie className="lottie" animationData={Loginlogo} loop={false} style={{ height: '50vh', width: '50vh' }} />
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }


// import React, { useState } from 'react';
// import Lottie from 'lottie-react';
// import Loginlogo from '../../Assets/Login.json';
// import { useNavigate } from 'react-router-dom';
// import '../../styles/Login.css';
// import alertIcon from '../../Assets/icons/alerticon.svg';
// import GoogleOAuthIcon from '../../Assets/icons/google.svg';
// import axios from 'axios';
// import Avatar from './Avatar';

// export default function Login() {
//     const [isToggled, setIsToggled] = useState(false);
//     const [name, setName] = useState('');
//     const [email, setMail] = useState('');
//     const [Password, setPassword] = useState('');
//     const [confirmPass, setconfirmPass] = useState('');
//     const [error, setError] = useState('');
//     const [showAvatar, setShowAvatar] = useState(false); // New state to manage avatar visibility

//     const navigate = useNavigate();

//     const handleToggle = () => {
//         setError('');
//         setIsToggled(prevState => !prevState);
//     };

//     const handleSignup = () => {
//         setError('');
//         if (!name || !email || !Password || !confirmPass) {
//             return setError('Everything is Required');
//         }
//         if (Password !== confirmPass) {
//             return setError('Passwords do not match');
//         }

//         const values = {
//             name,
//             email,
//             Password,
//         };

//         axios.post('http://localhost:5000/signup', values)
//             .then(res => {
//                 localStorage.setItem("Token", res.data.Token);
//                 setShowAvatar(true); // Show Avatar on successful signup
//             })
//             .catch(err => {
//                 if (err.response) {
//                     setError(err.response.data);
//                 } else {
//                     setError("Something went wrong");
//                 }
//             });
//     };

//     const handleLogin = () => {
//         setError('');

//         if (!email || !Password) {
//             return setError('Everything is Required');
//         }

//         const values = {
//             email,
//             Password,
//         };

//         axios.post('http://localhost:5000/login', values)
//             .then(res => {
//                 localStorage.setItem("Token", res.data.Token);
//                 navigate('/');
//             })
//             .catch(err => {
//                 if (err.response) {
//                     setError(err.response.data);
//                 } else {
//                     setError("Something went wrong");
//                 }
//             });
//     };

//     const guest = () => {
//         localStorage.setItem("Token", 'Guest');
//         navigate('/');
//     };

//     return (
//         <div className='MainLogin'>
//             <div className='loginBox'>
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                     <div className={`toggle-container ${isToggled ? 'is-toggled' : ''}`} onClick={handleToggle}>
//                         <div className="toggle-background"></div>
//                         <div className={`toggle-option ${!isToggled ? 'selected' : ''}`}>Sign Up</div>
//                         <div className={`toggle-option ${isToggled ? 'selected' : ''}`}>Login</div>
//                     </div>
//                 </div>

//                 {!showAvatar ? (
//                     !isToggled ? (
//                         <div className="form-container active">
//                             <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
//                                 <Lottie className="lottie" animationData={Loginlogo} loop={false} style={{ height: '50vh', width: '50vh' }} />
//                                 <div style={{ width: '50vh' }}>
//                                     {error && <div className='errorbox'><img src={alertIcon} alt='' className='errorMessageicon' />{error}</div>}
//                                     <input className='inputBox' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
//                                     <input className='inputBox' type='email' placeholder='Email' value={email} onChange={(e) => setMail(e.target.value)} />
//                                     <input className='inputBox' type='password' placeholder='Password' required value={Password} onChange={(e) => setPassword(e.target.value)} />
//                                     <input className='inputBox' type='password' placeholder='Confirm Password' required value={confirmPass} onChange={(e) => setconfirmPass(e.target.value)} />
//                                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                                         <div className='loginSubmit' style={{ marginRight: '20px' }} onClick={() => null}><img src={GoogleOAuthIcon} alt='' style={{ height: '1.5rem', width: '1.5rem' }} /></div>
//                                         <div className='loginSubmit' style={{ marginRight: '20px' }} onClick={guest}>Guest</div>
//                                         <div className='loginSubmit' onClick={handleSignup}>Sign Up</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ) : (
//                         <div className="form-container active">
//                             <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
//                                 <div style={{ width: '50vh' }}>
//                                     {error && <div className='errorbox'><img src={alertIcon} alt='' className='errorMessageicon' />{error}</div>}
//                                     <input className='inputBox' type='email' placeholder='Email' value={email} onChange={(e) => setMail(e.target.value)} />
//                                     <input className='inputBox' type='password' placeholder='Password' required value={Password} onChange={(e) => setPassword(e.target.value)} />
//                                     <div className='loginSubmit' style={{ marginRight: '20px' }} onClick={() => null}><img src={GoogleOAuthIcon} style={{ height: '1.5rem', width: '1.5rem' }} /></div>
//                                     <div className='loginSubmit' onClick={guest}>Guest Mode</div>
//                                     <div className='loginSubmit' style={{ marginLeft: '20px' }} onClick={handleLogin}>Login</div>
//                                 </div>
//                                 <Lottie className="lottie" animationData={Loginlogo} loop={false} style={{ height: '50vh', width: '50vh' }} />
//                             </div>
//                         </div>
//                     )
//                 ) : (
//                     // Show the Avatar component after successful signup
//                     <Avatar name={name} />
//                 )}
//             </div>
//         </div>
//     );
// }






import React, { useState } from 'react';
import Lottie from 'lottie-react';
import Loginlogo from '../../Assets/Login.json';
import { useNavigate } from 'react-router-dom';
import '../../styles/Login.css';
import alertIcon from '../../Assets/icons/alerticon.svg';
import GoogleOAuthIcon from '../../Assets/icons/google.svg';
import axios from 'axios';
import Avatar from './Avatar';

export default function Login() {
    const [isToggled, setIsToggled] = useState(false);
    const [name, setName] = useState('');
    const [email, setMail] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPass, setconfirmPass] = useState('');
    const [error, setError] = useState('');
    const [showAvatar, setShowAvatar] = useState(false);

    const navigate = useNavigate();

    const handleToggle = () => {
        setError('');
        setIsToggled(prevState => !prevState);
    };

    const handleSignup = () => {
        setError('');
        if (!name || !email || !Password || !confirmPass) {
            return setError('Everything is Required');
        }
        if (Password !== confirmPass) {
            return setError('Passwords do not match');
        }

        const values = {
            name,
            email,
            Password,
        };

        axios.post('http://localhost:5000/signup', values)
            .then(res => {
                localStorage.setItem("Token", res.data.Token);
                setShowAvatar(true); // Show Avatar on successful signup
            })
            .catch(err => {
                if (err.response) {
                    setError(err.response.data);
                } else {
                    setError("Something went wrong");
                }
            });
    };

    const handleLogin = () => {
        setError('');

        if (!email || !Password) {
            return setError('Everything is Required');
        }

        const values = {
            email,
            Password,
        };

        axios.post('http://localhost:5000/login', values)
            .then(res => {
                localStorage.setItem("Token", res.data.Token);
                navigate('/');
            })
            .catch(err => {
                if (err.response) {
                    setError(err.response.data);
                } else {
                    setError("Something went wrong");
                }
            });
    };

    const guest = () => {
        localStorage.setItem("Token", 'Guest');
        navigate('/');
    };

    return (
        <div className='MainLogin'>
            <div className='loginBox'>
                {!showAvatar ? (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className={`toggle-container ${isToggled ? 'is-toggled' : ''}`} onClick={handleToggle}>
                                <div className="toggle-background"></div>
                                <div className={`toggle-option ${!isToggled ? 'selected' : ''}`}>Sign Up</div>
                                <div className={`toggle-option ${isToggled ? 'selected' : ''}`}>Login</div>
                            </div>
                        </div>

                        <div className="form-container active">
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Lottie className="lottie" animationData={Loginlogo} loop={false} style={{ height: '50vh', width: '50vh' }} />
                                <div style={{ width: '50vh' }}>
                                    {error && <div className='errorbox'><img src={alertIcon} alt='' className='errorMessageicon' />{error}</div>}
                                    {!isToggled ? (
                                        <>
                                            <input className='inputBox' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                                            <input className='inputBox' type='email' placeholder='Email' value={email} onChange={(e) => setMail(e.target.value)} />
                                            <input className='inputBox' type='password' placeholder='Password' required value={Password} onChange={(e) => setPassword(e.target.value)} />
                                            <input className='inputBox' type='password' placeholder='Confirm Password' required value={confirmPass} onChange={(e) => setconfirmPass(e.target.value)} />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div className='loginSubmit' style={{ marginRight: '20px' }} onClick={() => null}><img src={GoogleOAuthIcon} alt='' style={{ height: '1.5rem', width: '1.5rem' }} /></div>
                                                <div className='loginSubmit' style={{ marginRight: '20px' }} onClick={guest}>Guest</div>
                                                <div className='loginSubmit' onClick={handleSignup}>Sign Up</div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <input className='inputBox' type='email' placeholder='Email' value={email} onChange={(e) => setMail(e.target.value)} />
                                            <input className='inputBox' type='password' placeholder='Password' required value={Password} onChange={(e) => setPassword(e.target.value)} />
                                            <div className='loginSubmit' style={{ marginRight: '20px' }} onClick={() => null}><img src={GoogleOAuthIcon} style={{ height: '1.5rem', width: '1.5rem' }} /></div>
                                            <div className='loginSubmit' onClick={guest}>Guest Mode</div>
                                            <div className='loginSubmit' style={{ marginLeft: '20px' }} onClick={handleLogin}>Login</div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    // Show the Avatar component after successful signup
                    <Avatar email={email} />
                )}
            </div>
        </div>
    );
}



