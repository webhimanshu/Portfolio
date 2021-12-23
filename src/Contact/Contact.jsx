import React ,{useState}from 'react'
import './contact.css';
const Contact = () => 
{
    const [state, setstate] = useState("")
        const handleChangle=(e)=>
        {
   const {name,value}=e.target;
        setstate({...state,[name]:value})
        }
    return (
        <div className='conatct-section'>
            <div className='contact-one'>
             <h2>Get In Touch</h2>
             <form className='inner-section'>
             <input type="text" placeholder='Your Name' value={state}  onChange={handleChangle}/>
               <input type="email" placeholder='Your email' value={state.email} onChange={handleChangle}/>
               <input type="number" placeholder='Your Phone' value={state.phone} onChange={handleChangle}/><br></br>
               <textarea  placeholder='Write Your Message' value={state.msg} onChange={handleChangle}/><br></br>
            
               <button type="submit">Send Message</button>
             </form>
            </div>
            <div className='contact-two'>
            <h2>My Contact Details</h2>
             <div className='details-section'>
             <h4>Email</h4>
             <p>himanshusharma2709@gmail.com</p>
             <h4>Phone</h4>
             <p>+91 8878552464</p>
             <h4>Address</h4>
             <p>Btm layout 1st stage</p>
                <p>Bengaluru,Karnataka</p>
             </div>
           
            </div>
        </div>
    )
}

export default Contact
