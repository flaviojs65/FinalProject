import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { vetements, Vetement } from '../vetments';

@Component({
  selector: 'app-details-vetment',
  templateUrl: './details-vetment.component.html',
  styleUrls: ['./details-vetment.component.css']
})
export class DetailsVetmentComponent implements OnInit, AfterViewInit {
  vetement: Vetement | undefined;
  @ViewChild('details') details!: ElementRef;

  constructor(private route: ActivatedRoute) { }

  ngAfterViewInit() {
    if (this.details) {
      this.details.nativeElement.style.position = 'sticky';
      this.details.nativeElement.style.top = '0';
    }
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const vetementIdFromRoute = Number(routeParams.get('id'));
    this.vetement = vetements.find(vetement => vetement.id === vetementIdFromRoute);
  }
}