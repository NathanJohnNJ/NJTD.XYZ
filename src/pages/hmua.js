import { motion } from 'framer-motion';

const HMUA = () => {

    return (
        <div className="hmuaPage">
            <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
            <div className="content">  
                <h1 className="hmuaTitle">Hair & Makeup Artistry</h1>
                <p className="hmuaText">You may be wondering why I've included a page featuring my hair and makeup portfolio...</p>


                <p className="smallSelection">This is just a small selection of my portfolio. To see my full portfolio, please visit my <a className="instagram" href="https://instagram.com/nathanjohnnj" target="_blank">Instagram</a>.</p>
            </div>
            </motion.div>
        </div>
    )
};

export default HMUA;