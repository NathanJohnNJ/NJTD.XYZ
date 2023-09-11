import './style.css';
import calc from '../../images/calcPreview.png';
import drumkit from '../../images/drumPreview.png'
import { useState, useEffect } from 'react';
import Modal from 'react-modal';

const PortfolioComponent = (props) => {

  const element = props.element;
  const mainDiv = `${element}Div`;
  const [shown, setShown] = useState(false);
  const [src, setSrc] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
      
    function openModal(){
        setModalIsOpen(true);
    }
    function closeModal(){
        setModalIsOpen(false);
    }

  function mouseOverFunction(){
    setShown(true)
  }
  function mouseOutFunction(){
    setShown(false)
  }
  function linkSrc(){
    if (element==="calc"){
      setSrc("http://localhost:3000/calculator")
      setImgSrc(calc)
    } else if (element==="drumkit"){
      setSrc("http://drum.njtd.xyz/")
      setImgSrc(drumkit)
    }
  }
  useEffect(() => {
    linkSrc();
  }, [])

    return(
      <div onClick={mouseOutFunction} className={mainDiv}>
        <div className="smallCircle" onMouseOver={mouseOverFunction} onMouseOut={mouseOutFunction} onClick={openModal}><img src={imgSrc} className="portImg" alt={element}></img></div>
        {shown && <div className="previewDiv"><iframe title={element} className="iframe" src={src} width="100%" height="100%"></iframe></div>}
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            contentLabel='projects'
            className="portfolioModal"
            >
              <div className="previewWindow" onClick={closeModal} >
                <iframe title={element} className="iframe" src={src} width="100%" height="100%"></iframe>
              </div>
            </Modal>
      </div>
    );
};

export default PortfolioComponent;