import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClHeroesComponent } from './cl-heroes.component';

describe('ClHeroesComponent', () => {
  let component: ClHeroesComponent;
  let fixture: ComponentFixture<ClHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
