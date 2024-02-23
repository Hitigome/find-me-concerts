import axios from 'axios'

interface Image {
    url: string;
}

interface ConcertEvent {
    id: string;
    name: string;
    images: Image[];
}

interface TicketmasterResponse {
    _embedded: {
        events: Event[];
    }
}

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
const API_KEY = 'oS3yLuWAgP3jZVa221ofxKaGL9xWLT5j';

export async function getEvent(city: string): Promise<ConcertEvent[]> {
    try {
        const response = await axios.get<TicketmasterResponse>(`${BASE_URL}/events.json`, {
            params: {
                apikey: API_KEY,
                city: city,
            },
        });
        return response.data._embedded.events;
    } catch (error) {
        console.error('Failed to fetch events', error);
        return [];
    }
}

export async function getEventImage(id: string): Promise<string> {
    try {
        const response = await axios.get<ConcertEvent>(`${BASE_URL}/events/${id}/images.json`, {
            params: {
                apikey: API_KEY,
            },
        });
        return response.data.images[0].url;
    } catch (error) {
        console.error('Failed to fetch event images', error);
        return '';
    }
}