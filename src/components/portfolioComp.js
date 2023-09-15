import './style.css';
import calculator from './images/calc.png';
import drumkit from './images/drumPreview.png';
import alien from './images/alien.png';
import clone from './images/clone.png';
import dragSite from './images/dragSite.jpg';
import cookie from './images/cookies.png';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';

const PortfolioComponent = (props) => {

  const element = props.element;
  const [shown, setShown] = useState(false);
  const [src, setSrc] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
      
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
      setSrc("http://calc.njtd.xyz")
      setImgSrc(calculator)
      setProjectName('React Calculator')
    } else if (element==="drumkit"){
      setSrc("http://drum.njtd.xyz/")
      setImgSrc(drumkit)
      setProjectName('Drum Kit')
    } else if (element==="alien"){
      setSrc("http://drum.njtd.xyz/")
      setImgSrc(alien)
      setProjectName('Python Text-Based Game')
    } else if (element==="clone"){
      setSrc("http://clone.njtd.xyz/")
      setImgSrc(clone)
      setProjectName('Website Clone')
    } else if (element==="dragSite"){
      setSrc("http://drag.njtd.xyz/")
      setImgSrc(dragSite)
      setProjectName('Drag Race Website')
    } else if (element==="cookies"){
      setSrc("http://cookiesfront.njtd.xyz")
      setImgSrc(cookie)
      setProjectName('The Cookie Club')
    }
  }
  useEffect(() => {
    linkSrc();
  }, [])

    return(
      <div onClick={mouseOutFunction} className="mainDiv">
        <div className="hoverDiv">
          <img src={imgSrc} className="portImg" alt={element} onMouseOver={mouseOverFunction} onMouseOut={mouseOutFunction} onClick={openModal}></img>
          {shown && <div className="projectNameDiv">
            <h1 className="projectName" onMouseOut={mouseOutFunction}>{projectName}</h1></div>}
        </div>  
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            contentLabel='portfolio'
            className="portfolioModal"
            >
              <div className="previewWindow" onClick={closeModal} >
                <iframe title={element} className="modalIframe" src={src} width="100%" height="100%"></iframe>
              </div>
            </Modal>
      </div>
    );
};

export default PortfolioComponent;