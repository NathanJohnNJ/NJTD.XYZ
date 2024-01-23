import { MyImage } from './about.styles';
import { useScroll } from 'framer-motion';
import meImg from '../../images/me.jpg';

const MyImg = () => {

  const { scrollYProgress } = useScroll();

    return(
        <MyImage style={{ opacity:scrollYProgress }}>
            <img src={meImg} alt="NJ" title="Hi! It's me, I'm the solution, it's me. =" width="180px" height="auto"></img>
        </MyImage>
    )
};

export default MyImg;
