import { motion } from 'framer-motion';
import { useState } from 'react';



const Contact = () => {

    const [body, setBody] = useState('');
    const [from, setFrom] = useState('');
    function mailToHandler(){
        return `mailto:nj@njtd.xyz?subject=Website%20enquiry%20from%20${from}&body=${body}`
    }

    return (
        <div className="contactPage">
            <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            >
                <h1 className="contactTitle">CONTACT</h1>
                <div className="please">
                    <p>Please feel free to get in touch using the form below to discuss how we can work together so I can bring you the best solutions for your business.</p>
                </div>
                <div className="contactForm">
                    <fieldset className="contactField">
                        <legend className="contactLegend">GET IN TOUCH</legend>
                <form onSubmit={mailToHandler}>
                    <input name="name" className="contactName" type="text" placeholder="Name" onChange={(e) => setFrom(e.target.value)} />
                    <input name="body" className="contactText" type="text" onChange={(e) =>setBody(e.target.value)} placeholder="Query..."></input>
                    <input type="submit" value="Send" className="contactSubmit" />
                </form>
                </fieldset>
                </div>
            </motion.div>
        </div>
    )
};

export default Contact;