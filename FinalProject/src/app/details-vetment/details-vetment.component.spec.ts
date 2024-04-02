import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVetmentComponent } from './details-vetment.component';

describe('DetailsVetmentComponent', () => {
  let component: DetailsVetmentComponent;
  let fixture: ComponentFixture<DetailsVetmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsVetmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsVetmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
