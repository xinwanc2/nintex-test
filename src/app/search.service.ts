import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightDataService, Itinerary } from './flight-data.service';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    constructor(
        private http: HttpClient,
        private dataService: FlightDataService
    ) {}

  // TODO: filter result based on airline name and stops search criteria
  searchFlights() {
        this.http
            .get<Itinerary[]>('https://nmflightapi.azurewebsites.net/api/flight')
            .subscribe((itineraries: Itinerary[]) => {
                this.dataService.setItineraries(itineraries);
            });
    }
}
