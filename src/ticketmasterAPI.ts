import axios from 'axios'

interface Event {
    id: string;
    name: string;
}

interface TicketmasterResponse {
    _embedded: {
        events: Event[];
    }
}

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
const API_KEY = 'oS3yLuWAgP3jZVa221ofxKaGL9xWLT5j';

export async function getEvent(city: string): Promise<Event[]> {
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