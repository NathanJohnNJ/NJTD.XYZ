import { motion } from 'framer-motion';
import Cookies from './Portfolio/TheCookieClub/frontEnd/Cookies'

const CookiesPage = (props) => {
    props.setShowNav(false);
    props.setShowFooter(false);

    return (
        <div className="cookiePage">
            <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
                <h1 className="cookieTitle">THE COOKIE CLUB</h1>
                <Cookies />
            </motion.div>
        </div>
    )
};

export default CookiesPage;