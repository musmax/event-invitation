import React from 'react';
import '../styles/display.css'

function Highlight() {
    return (
        <div className="highlight">
            <div>
                <p>Date</p>
                <p>Sunday 29th September, 2024</p>
            </div>
            <p className="demacator"></p>
            <div>
                <p>Time</p>
                <p>09:00 - 17:00 WAT</p>
            </div>
            <p className="demacator"></p>
        <div>
                <p>Location</p>
                <p>High Point Event Centre & Suites</p>
            </div>
            <button>Buy ticket</button>
        </div>
    )
}
const Card = () => {
  return (
    <div>
      <Highlight />
      <div className="card-main">
        <div>
        <img src="https://bitooqoh.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdkgk37ndj%2Fimage%2Fupload%2Fv1722379947%2Fweb_r58osn.png&w=2048&q=75" 
        alt="main" 
        className="card-image" 
        />
        </div>
        <div className="upper-main-body">
        <div className="card-body">
        <div className="body intro">
        <h1>MUSLIM TECH EXPO</h1>
        <p>Muslim Tech Expo is a platform for Muslim tech professionals,
          entrepreneurs and aspiring techies to connect in the world of tech.</p>
        </div>
        <div className="body about">
        <h2>About the Event</h2>
        <p>
        Muslim Tech Expo is bridging the gap between having a tech career and strengthening your faith. 
        We are creating a vibrant platform to connect, explore, and learn invaluable insights from Muslim tech industry leaders. By participating in MTE, you become part of a transformative movement, 
        strengthening your adherence to religious beliefs (deen) and expanding your professional networks.
        </p>
        </div>
        <div className="body time">
        <h2>Date & Time</h2>
        <div>
          <img src="https://bitooqoh.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcalendar.e413b281.png&w=48&q=75" alt="" width={20} height={20}/>
          <p>Sunday 29th September, 2024</p>
        </div>
        </div>
        <div className="body location">
        <h2>Location</h2>
        <div>
          <img src="https://bitooqoh.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flocation.ffa9ceab.png&w=48&q=75" alt="" width={30} height={30}/>
          <p>High Point Event Centre & Suites
          High Point Event Centre & Suites 5 Impressive Cl, Agidingbi, Lagos.</p>
        </div>
        </div>
      </div>
        {/* <div className="organiser-holder">
        <div className="organiser">
          <p>Wizkid Ojuelegba</p>
          <button>Host</button>
        </div>
        <div className="organiser">
          <button>Buy Tickets</button>
        </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
