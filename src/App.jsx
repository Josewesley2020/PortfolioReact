// import logo from './logo.svg';
import './App.css';
import X from './assets/X.png';
import Certificate from './assets/DP900.png';
import Profile from './assets/Mask group.png';
import Skill  from './assets/html.png';
import YouTube from  './assets/youtube-logoe.png'
import GitHub from './assets/github_PNG40.png'
import Linkedin from './assets/Linkdin.png'
import Cmd from './assets/cmd.png'
import Folder from './assets/folder.png'

import Html from './components/Skills-Html'
import Css3 from './components/Skills-Css3'
import {  BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Modal from 'react-modal';
import { useState } from 'react';

import Folder1 from './components/Folders/Folder1'

// import InterfaceModal from '../src/components/InterfaceModal'


Modal.setAppElement('#root');


function App() {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      width: '55%',
      height: '70%',
      top: '40%',
      left: '65%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      opacity: '100%',
      backgroundColor: '#fff',
      boxShadow: '0px 0px 10px #000',
    }
  }
  

  const Nome = "José Wesley";
  const Profissao = "<Front-end Developer/>"




  

  return (
    <div className='Backgroung'>
      {/* Essa DIV é o conteudo do lado esquerdo da tela */}
      <div>
        <div className='Profile'>
            <div className='Profile-image'> 
                <h4>{Nome}</h4>
                <img src={Profile} alt='' className='Photo-profile'/>
                <p className='Profissao'>{Profissao}</p>
            </div>
            <div className='Profile-contact'>
                <a href='https://www.linkedin.com/in/jos%C3%A9-wesley-da-silva-220376200/' target='_blank' rel="noopener noreferrer"><img src={Linkedin} alt="Linkedin" className='Redes'/></a>
                <a href='https://github.com/Josewesley2020' target='_blank' rel="noopener noreferrer"><img src={GitHub} alt="GitHub" className='Redes' /></a>
                <a href='https://www.youtube.com/channel/UC7X0Kuz6UIOADKPlQ0TBFeg' target='_blank' rel="noopener noreferrer"><img src={YouTube} alt="YouTube" className='Redes'/></a>
                {/* <div><img src={Linkedin} alt="Linkedin" className='Redes'/></div>
                <div><img src={GitHub} alt="GitHub" className='Redes' /></div>
              <div><img src={YouTube} alt="YouTube" className='Redes'/></div> */}
            </div>
        </div>
        <div className='Certificate Draggable'>
          <img src={Certificate} alt="" className='CertificateSize'/>
        </div>
      </div>
      {/* Essa DIV é o conteudo do lado direito da tela */}
      <div className='Content'>


              {/* Conteudo das pastas  */}
              <Modal isOpen={modalIsOpen}onRequestClose={closeModal}style={customStyles}>
                <div className='HeaderModal'><img className='X' src={X} alt="iconeDeFechar"  onClick={closeModal}/></div>
                
                {/* <InterfaceModal> teste </InterfaceModal> */}
                <Folder1/>
              </Modal>


        <BrowserRouter>
              <div className='Content-principal'>
                  <div className='Content-left'>
                    <img src={Folder} alt="cade a imagem" className='Folder Modal-button' onClick={openModal}  />
                    <p>Nome da pasta</p>

                    <img src={Folder} alt="cade a imagem" className='Folder'/>
                    <p>Nome da pasta</p>

                    <img src={Folder} alt="cade a imagem" className='Folder'/>
                    <p>Nome da pasta</p>

                  </div>

                  <div className='Content-dynamic'> 
                    <div className='Header'>
                      <img src={Cmd} alt="AM" className='CmdIcon' />
                      <p className='Header_text'>C:\\Windows\system32\cmd.exe</p>
                    </div>
                    <div className='Rotas'>
                        <Routes>
                          <Route path="/html" element={<Html/>}/>
                          <Route path="/Css3" element={<Css3/>}/>
                        </Routes>
                    </div>
                  </div>
              </div>
              <div className='Content-botton'> 
                <div className='List'>
  
                  <Link to='/html'><img src={Skill} alt="cade a imagem" className='Skills'/></Link>
                  <Link to='/Css3'><img src={Skill} alt="cade a imagem" className='Skills'/></Link>
                  <Link to='/html'><img src={Skill} alt="cade a imagem" className='Skills'/></Link>
        
                </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
    
  );
}

export default App;
