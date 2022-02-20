import { Component, OnInit } from '@angular/core';
import { FlightDataService } from '../flight-data.service'
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  airlines$: Observable<string[]> = of([]);
  constructor(private dataService: FlightDataService) { }

  ngOnInit(): void {
    this.airlines$ = this.dataService.getAvailableAirlines();
  }

}
