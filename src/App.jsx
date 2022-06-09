// import logo from './logo.svg';
import './App.css';
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



function App() {

  

  const Nome = "José Wesley";
  const Profissao = "<Front-end Developer/>"



  

  return (
    <div className='Backgroung Dropzone'>

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
        <div className='Certificate Draggable' id='Draggable-1'>
          <img src={Certificate} alt="" className='CertificateSize'/>
        </div>
      </div>

      <div className='Content'>
        <BrowserRouter>
              <div className='Content-principal'>
                  <div className='Content-left'>
                    <img src={Folder} alt="cade a imagem" className='Folder'/>
                    <p>Nome da pasta</p>

                    <img src={Folder} alt="cade a imagem" className='Folder'/>
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
                {/* <Link to='/html'>pres</Link> */}
  
                <Link to='/html'><img src={Skill} alt="cade a imagem" className='Skills'/></Link>
                <Link to='/Css3'><img src={Skill} alt="cade a imagem" className='Skills'/></Link>
                <Link to='/html'><img src={Skill} alt="cade a imagem" className='Skills'/></Link>
                
                
                
                <img src={Skill} alt="cade  imagem" className='Skills'/>
                <img src={Skill} alt="cade a imagem" className='Skills'/>
                <img src={Skill} alt="cade a imagem" className='Skills'/>
                <img src={Skill} alt="cade a imagem" className='Skills'/>
                <img src={Skill} alt="cade a imagem" className='Skills'/>
                <img src={Skill} alt="cade a imagem" className='Skills'/>
                <img src={Skill} alt="cade a imagem" className='Skills'/>
                <img src={Skill} alt="cade a imagem" className='Skills'/>
                <img src={Skill} alt="cade a imagem" className='Skills'/>

              </div>
          </div>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
