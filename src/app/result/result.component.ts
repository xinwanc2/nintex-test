import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table/table-data-source';
import { Observable, of } from 'rxjs';
import { FlightDataService, Itinerary } from '../flight-data.service';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit, AfterViewInit {
    displayedColumns = [
        'Airline',
        'Number of stops',
        'Inbound duration',
        'Outbound duration',
        'Total Amount',
    ];
    dataSource!: MatTableDataSource<Itinerary>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(private dataService: FlightDataService) {}

    ngOnInit(): void {
        this.dataService
            .getItineraries()
            .subscribe((itinerary: Itinerary[]) => {
                this.dataSource = new MatTableDataSource<Itinerary>(itinerary);
            });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }
}
