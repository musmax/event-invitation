import React from 'react';

const Event = () => {
  return (
    <div>
        <div className="main-event">
            <form action="">
                <h1>Add Event</h1>
                <input type="text" name="title" placeholder="Event Title"/>
                <input type="textarea" name="description" placeholder="Event Description"/>
                <input type="date" name="date" placeholder="Event Date"/>
                <input type="time" name="time" placeholder="Event Time"/>
                <input type="text" name="location" placeholder="Event Location"/>

            </form>
        </div>
    </div>
  );
}

export default Event;
