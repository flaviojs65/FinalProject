import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { vetements, Vetement } from '../vetments';

@Component({
  selector: 'app-details-vetment',
  templateUrl: './details-vetment.component.html',
  styleUrls: ['./details-vetment.component.css']
})
export class DetailsVetmentComponent implements OnInit {
  vetement: Vetement | undefined;
  vetements: Vetement[] = [...vetements];



  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const vetementIdFromRoute = Number(routeParams.get('id'));
    this.vetement = vetements.find(vetement => vetement.id === vetementIdFromRoute);
  }
}