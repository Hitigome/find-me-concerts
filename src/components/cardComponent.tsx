'use client'
import React, { useState, useEffect } from 'react';
import SearchBar from './searchBar';
import { getEvent, getEventImage } from '../ticketmasterAPI';

interface ConcertEvent {
  id: string;
  name: string;
  // Add other event details as needed
}

interface EventsPageProps {
    city: string;
    }

const EventsPage: React.FC<EventsPageProps> = ({ city }) => {
  const [events, setEvents] = React.useState<ConcertEvent[]>([]);

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
            <li key={event.id} className="border-2 border-solid border-black rounded bg-white">
                <h2>{event.name}</h2>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
