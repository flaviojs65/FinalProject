import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetementNewComponent } from './vetement-new.component';

describe('VetementNewComponent', () => {
  let component: VetementNewComponent;
  let fixture: ComponentFixture<VetementNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VetementNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VetementNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
