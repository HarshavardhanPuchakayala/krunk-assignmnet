import React from 'react'
import Robo from "/assets/Robo.png"
import "./App.css"
import Chats from './Components/Chats'
import COIN from "/assets/coin.svg"
import ai from "/assets/AI.png"
import { IoIosArrowForward } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
export default function App() {

  return (
    <>
    <section className="mainsection">
    <main>
       <div className="Header">
        <div className="div-h-1">
          <img
            loading="lazy"
            src={Robo}
            className="img-h-1"
          />
          <div className="div-h-3">
            <div className="div-h-4">
              <div className="div-h-5">Timpu </div>
              <img
                loading="lazy"
                src={COIN}
                className="img-h-2"
              />
            </div>
            <div className="div-h-6">Chat assistant</div>
          </div>
        </div>
        <div className="div-h-7">
          <div className="div-h-8" />
          <div className="div-h-9">Online</div>
        </div>
      </div>
      <Chats/>



      <div className="Inbox">
        <div className="textbox-section">
          <div className="textbox-input">
            <input type='text' placeholder='Type your message' className='textbox-inputs'/>
            
            <GrAttachment 
              className="file"
            />
          </div>
          <button className="send">
            <IoIosArrowForward 
              className="img-2"
            />
          </button>
        </div>
        <div className="copyRight">
          <p className="copy">Powered by </p>
          <p className="copy-name">Krunk.ai</p>
          <img
            loading="lazy"
            src={ai}
            className="img-ai"
          />
        </div>
      </div>



      </main>
      </section>
      </>
  )
}
