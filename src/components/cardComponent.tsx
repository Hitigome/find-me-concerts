'use client'
import React, { useState, useEffect } from 'react';
import { getEvent, getEventImage } from '../ticketmasterAPI';

interface ConcertEvent {
  id: string;
  name: string;
  images: Image[];
}

interface EventsPageProps {
    city: string;
    }

const EventsPage: React.FC<EventsPageProps> = ({ city }) => {
  const [events, setEvents] = React.useState<ConcertEvent[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const eventsData = await getEvent(city);
      const eventsWithImages = await Promise.all(
        eventsData.map(async (event) => {
          const image = await getEventImage(event.id);
          return { ...event, image };
        })
      );
      setEvents(eventsData);
    };
    fetchData();
  }, [city]);

  return (
    <div>
      <h1>Events in {city}</h1>
      <div className={"mx-10"}>
        <ul className={"flex flex-wrap justify-between"}>
          {events.map(event => (
              <li key={event.id} 
                  className="border-2 border-solid border-black rounded bg-white w-80 h-80 mb-3 text-center">
                  <div>
                    <h2 className='w-full'>{event.name}</h2>
                  </div>
                  <div className='h-full'>
                    <img src={event.images[0].url} alt={event.name} className="w-full object-cover" style={{height:'80%'}} />
                  </div>
              </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventsPage;
