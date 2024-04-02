import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVetmentsComponent } from './liste-vetments.component';

describe('ListeVetmentsComponent', () => {
  let component: ListeVetmentsComponent;
  let fixture: ComponentFixture<ListeVetmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeVetmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeVetmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
