// src/pages/EventsPage.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { getEvent } from '../src/ticketmasterAPI';

const EventsPage: React.FC = () => {
  const [events, setEvents] = React.useState<ConcertEvent[]>([]);
  const city = 'Seattle'; 

  React.useEffect(() => {
    const fetchData = async () => {
      const eventsData = await getEvent(city);
      setEvents(eventsData);
    };
    fetchData();
  }, [city]);

  return (
    <div>
      <h1>Events in {city}</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.name}</h2>
            {/* Display other event details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
