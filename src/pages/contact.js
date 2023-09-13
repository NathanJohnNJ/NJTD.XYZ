import { motion } from 'framer-motion';
import { useState } from 'react';



const Contact = () => {

    const [body, setBody] = useState('');
    const [from, setFrom] = useState('');
    function mailToHandler(){
        return `mailto:nj@njtd.xyz?subject=Website%20enquiry%20from%20${from}&body=${body}`
    }

    return (
        <div className="njcodes">
            <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
                <h1 className="contactTitle">CONTACT</h1>
                <div>
                    <p>Please feel free to get in touch using the form below to discuss how we can work together so I can bring you the best solutions for your business.</p>
                </div>
                <form onSubmit={mailToHandler}>
                    <input name="name" type="text" placeholder="Name" onChange={(e) => setFrom(e.target.value)} />
                    <textarea name="body" onChange={(e) =>setBody(e.target.value)}></textarea>
                    <input type="submit" value="Send" />
                </form>
            </motion.div>
        </div>
    )
};

export default Contact;