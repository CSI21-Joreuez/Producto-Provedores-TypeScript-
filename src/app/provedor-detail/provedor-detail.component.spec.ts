import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvedorDetailComponent } from './provedor-detail.component';

describe('ProvedorDetailComponent', () => {
  let component: ProvedorDetailComponent;
  let fixture: ComponentFixture<ProvedorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvedorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvedorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
