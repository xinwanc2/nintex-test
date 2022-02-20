import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FlightDataService, Itinerary } from '../flight-data.service';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
    itineraries$: Observable<Itinerary[]> = of([]);

    constructor(private dataService: FlightDataService) {}

    ngOnInit(): void {
        this.itineraries$ = this.dataService.getItineraries();
    }
}
