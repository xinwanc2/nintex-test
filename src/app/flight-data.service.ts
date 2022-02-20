import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Itinerary {
    AirlineLogoAddress: string;
    AirlineName: string;
    InboundFlightsDuration: string;
    OutboundFlightsDuration: string;
    Stops: number;
    TotalAmount: number;
}

@Injectable({
    providedIn: 'root',
})
export class FlightDataService {
    private itineraries: BehaviorSubject<Itinerary[]> = new BehaviorSubject<
        Itinerary[]
    >([]);

    constructor() {}

    setItineraries(itineraries: Itinerary[]) {
        this.itineraries.next(itineraries);
    }

    getItineraries(): Observable<Itinerary[]> {
        return this.itineraries.asObservable();
    }

    getAvailableAirlines(): Observable<string[]> {
        return this.getItineraries().pipe(
            map((itineraries) => {
                const airlines: string[] = [];

                itineraries.forEach((i) => {
                    if (!airlines.includes(i.AirlineName)) {
                        airlines.push(i.AirlineName);
                    }
                });

                return airlines;
            })
        );
    }
}
