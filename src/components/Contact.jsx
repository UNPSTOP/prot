import { useState } from 'react'
import phone from '../assets/phone.svg'
import twitter from '../assets/twitter.svg'
import loction from '../assets/map-pin.svg'
import mail from '../assets/maile.svg'
import github from '../assets/github.svg'
import linkdin from '../assets/link.svg'
import './contact.css'
// import { json } from 'express'
function Contact() {
    const [name, setname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [subject, setsubject] = useState('')
    const [massage, setmassage] = useState('')
    const[istruebutton,setbuttontrue]=useState(true)
    async function handler(e) {
        e.preventDefault();
        // console.log(name, lastname, email, subject, massage)
        try {
            setbuttontrue(false)
            const response = await fetch('https://proptbacken-api.onrender.com/api/sendkey', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                console.log(response)
                throw new Error("Response is not OK");
            }
            const data = await response.json();
            const token = data.key;
            // console.log(token)
               try{
                 const response2 = await fetch('https://proptbacken-api.onrender.com/api/addData', {
                    method: 'POST',
                    credentials: 'include',
                    headers: { "Authorization": `Bearer ${token}`, "content-type": "application/json" },
                    body: JSON.stringify({
                        name: name,
                        lastname: lastname,
                        email: email,
                        subject: subject,
                        message: massage
                    })
                })
                if (response2.ok) {
                    setname('')
                    setemail('')
                    setlastname('')
                    setsubject('')
                    setmassage('')
                    setbuttontrue(true)
                    alert("massage sende successfuly")
                }
               }catch(error){
                console.log(error)
                 throw new Error("Response is not OK");
               }


        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div  >
            <div >
                <h1>Get In Touch</h1>
                <p>I'm always interested in new opportunities and interesting projects. Let's discuss how we can work together</p>
            </div>

            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}>
                <form onSubmit={handler} style={{ border: '1px solid black', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0px 1px 1px 0px ', backgroundColor: "white" }} >
                    <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                        <p>Send me a message</p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div><label style={{ marginBottom: '5px', display: 'inline-block' }} htmlFor="">First Name</label>
                                <input value={name} onChange={(e) => setname(e.target.value)} className='firstlaste' type="text" name="" id="" />
                            </div>
                            <div><label style={{ marginBottom: '5px', display: 'inline-block' }} htmlFor="">Last  Name</label>
                                <input value={lastname} onChange={(e) => setlastname(e.target.value)} className='firstlaste' type="text" name="" id="" />
                            </div></div>
                        <div><div><label style={{ marginBottom: '5px', display: 'inline-block' }} htmlFor="">Email</label><br /><input value={email} onChange={(e) => setemail(e.target.value)} type="email" /></div></div>
                        <div><div><label style={{ marginBottom: '5px', display: 'inline-block' }} htmlFor="">Subject</label><br /><input value={subject} onChange={(e) => setsubject(e.target.value)} type="text" /></div></div>
                        <div>
                            <label style={{ marginBottom: '5px', display: 'inline-block' }} htmlFor="">Send me massage</label><br />
                            <textarea value={massage} onChange={(e) => setmassage(e.target.value)} cols={50} rows={10} placeholder='Tell me about youre  project..'></textarea>
                        </div>
                        <div><button style={{ width: "91%", }}>{istruebutton?"Send Message":"Message Sending"}</button></div>
                    </div>
                </form>
                <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <h3>Contact Information</h3>
                    <div className='info'>
                        <div><img src={mail} alt="" /></div>
                        <div className='det'><span>Email</span>
                            <br />
                            <span>irfanaslamo700@gmail.com</span>
                        </div>
                    </div>
                    <div className='info'>
                        <div><img src={phone} alt="" /></div>
                        <div className='det'><span>Phone</span>
                            <br />
                            <span>+91 9136835247</span>
                        </div>
                    </div>
                    <div className='info'>
                        <div><img src={loction} alt="" /></div>
                        <div className='det'><span>Location</span>
                            <br />
                            <span>Mumbai sakinaka (400072)</span>
                        </div>

                    </div>
                    <h3>Follow Me</h3>
                    <div style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem' }}><a href="https://github.com/UNPSTOP"><img style={{ cursor: 'pointer' }} src={github} alt="" /></a>
                        <a href="https://www.linkedin.com/in/irfan-khan-2b12332b1/"><img style={{ cursor: 'pointer' }} src={linkdin} alt="" /></a>
                        <a href="mailto:irfanaslamo700@gmail.com"><img style={{ cursor: 'pointer' }} src={mail} alt="" /></a></div>
                    <div style={{ paddingTop: "1rem", border: '1px solid ', borderRadius: '1rem', backgroundColor: 'lightgrey', padding: '1rem' }}>
                        <p>Ready to  start a project?</p>
                        <p style={{ maxWidth: '26rem' }}>I'm available  for freelance work and consulting .Lets' bring youre ideas to life!</p>
                         <a href="mailto:irfanaslamo700@gmail.com"><button style={{ width: '100%' }}> let's Talk</button> </a>
                         
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
