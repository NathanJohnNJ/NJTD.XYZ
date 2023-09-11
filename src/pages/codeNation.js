import { motion } from 'framer-motion';

const CodeNation = () => {

    return (
        <div className="codeNationPage">
            <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
                <h1 className="codeNationTitle">CODE NATION</h1>
            </motion.div>
        </div>
    )
};

export default CodeNation;