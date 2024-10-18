import React from 'react'
import '../styles/header.css'
import { useState } from 'react'
import {Link} from 'react-router-dom';


export default function Header() {

  function ModalCard(props) {
    return <div>
      <div className="popup" id='popup'>
        <div className="popup_inner">
          <img src="https://bitooqoh.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmteEvent.855f6c88.png&w=1920&q=75" alt="pop-up" />
          <h3>{props.intro}</h3>
          <p>{props.detail}</p>
          <button className="btn">
            <Link to='/display' onClick={removeModal}>
            {props.buy}
            </Link>
            </button>
        </div>
        <i class="fa fa-times-circle-o" aria-hidden="true" onClick={removeModal}></i>
      </div>
    </div>
  }

  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(!modal);
  }

  function removeModal() {
    document.querySelector("#popup").style.display = "none";
  }

  return (
    <div>
        <div className="main-header">
      <h1><img src="https://bitooqoh.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.273405ab.png&w=256&q=75" alt="logo" width={50} height={50} /></h1>
      <ul className="navbar">
      <li>About Us</li>
      <li onClick={handleModal}>Explore Events</li>
      <Link to="/login" className="special">
        <li>Login</li>
      </Link>

      <Link to="/create">
      <li>Create Event</li>
      </Link>
    </ul>
        </div>
      {modal && (
        <ModalCard 
          intro="Muslim Tech Expo 2.0"
          detail="MTE is a platform for Muslim tech professionals, entrepreneurs and aspiring techies to connect in the world of tech."
          buy="Buy Tickets"
          closeModal={handleModal} 
        />
      )}
    </div>
  )
}
