import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovablePackagesComponent } from './approvable-packages.component';

describe('ApprovablePackagesComponent', () => {
  let component: ApprovablePackagesComponent;
  let fixture: ComponentFixture<ApprovablePackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovablePackagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprovablePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
