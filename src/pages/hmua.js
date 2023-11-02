import { motion } from 'framer-motion';
import './style.css';
import feroce from '../components/hmuaPortfolio/feroce.jpg';
import print1 from '../components/hmuaPortfolio/print1.png';
import print2 from '../components/hmuaPortfolio/print2.png';
import vogue from '../components/hmuaPortfolio/vogue.jpg';
import wedding1 from '../components/hmuaPortfolio/wedding1.jpg';
import wedding2 from '../components/hmuaPortfolio/wedding2.jpg';
import rocks from '../components/hmuaPortfolio/rocks5.jpg';
import tree2 from '../components/hmuaPortfolio/tree2.jpg';
import other from '../components/hmuaPortfolio/other.jpg';
import chez1 from '../components/hmuaPortfolio/chez1.jpg';
import mamzy from '../components/hmuaPortfolio/mamzy.jpg';
import boys from '../components/hmuaPortfolio/boys.jpg';
import chez2 from '../components/hmuaPortfolio/chez2.jpg';
// import sport from '../components/hmuaPortfolio/sport.jpg';
// import sport2 from '../components/hmuaPortfolio/sport2.jpg';
import water from '../components/hmuaPortfolio/water1.jpg';
import water2 from '../components/hmuaPortfolio/water2.jpg';
import water3 from '../components/hmuaPortfolio/water3.jpg';


const HMUA = () => { 
    function sportImgs(){
        const list = ["sport", "sport2"]
        for (let i = 0; i<list.length(); i++){
            const source = `../components/hmuaPortfolio/${list}[i].jpg`;
            return(
                <div>
                    <img src={source} alt="photoshoot"></img>
                </div>
            )        
        }
        return;          
    }
    

    return (
        <div className="hmuaPage">
            <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
            <div className=" hmuacontent">  
                <div className="hmuaText">
                    <h1 className="hmuaTitle">Hair & Makeup Artistry</h1>
                    <p className="hmuaText">I toyed with the idea of including my hair and makeup portfolio on this website whilst I'm trying to enter into the coding/developer world before realising:</p>
                    <p className="hmuaText">This work reflects a large portion of my professional life that has led me to where I am today and that I am immensely proud of. All of this imagery showcases my creative ability which is definitely something I intend to transfer across to all my future endeavours...</p>
                    <p className="hmuaText">...and at the end of the day, it's bloody good stuff, and definitely worth a mention and a browse.</p>
                    <p className="smallSelection">This is just a small selection of my portfolio. To see my full portfolio, please visit my <a className="instagram" href="https://instagram.com/nathanjohnnj" target="_blank" rel="noreferrer">Instagram</a>.</p>
                </div>
                <div className="hmuaImages">
                    <div className="scroll-container">
                        <img id="slides" className="slide" src={feroce} alt="Feroce online magazine feature"/>
                        <img id="slides" className="slide" src={print1} alt="Magazine feature"/>
                        <img id="slides" className="slide" src={water3} alt="Photoshoot"/>
                        {/* <img id="slides" className="slide" src={sport} alt="Photoshoot"/>
                        <img id="slides" className="slide" src={sport2} alt="Photoshoot"/> */}
                        {sportImgs}
                        <img id="slides" className="slide" src={print2} alt="Magazine feature"/>
                        <img id="slides" className="slide vogue" src={vogue} alt="Vogue Italia feature"/>
                        <img id="slides" className="slide" src={wedding1} alt="Bridal hair and makeup"/>
                        <img id="slides" className="slide" src={wedding2} alt="Bridal hair and makeup" title="My brother's gorgeous wife Steph on their wedding day. Hair by myself, makeup by the amazing Lucy Hart MUA"/>
                        <img id="slides" className="slide" src={rocks} alt="Marbella shoot"/>
                        <img id="slides" className="slide" src={water2} alt="Photoshoot"/>
                        <img id="slides" className="slide" src={chez2} alt="Photoshoot"/>
                        <img id="slides" className="slide" src={tree2} alt="Marbella shoot"/>
                        <img id="slides" className="slide" src={other} alt="Photoshoot"/>
                        <img id="slides" className="slide" src={chez1} alt="Photoshoot"/>
                        <img id="slides" className="slide" src={mamzy} alt="Marella shoot"/>
                        <img id="slides" className="slide" src={water} alt="Photoshoot"/>
                        <img id="slides" className="slide" src={boys} alt="Photoshoot"/>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    )
};

export default HMUA;