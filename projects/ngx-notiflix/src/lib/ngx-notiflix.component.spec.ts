import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNotiflixComponent } from './ngx-notiflix.component';

describe('NgxNotiflixComponent', () => {
  let component: NgxNotiflixComponent;
  let fixture: ComponentFixture<NgxNotiflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNotiflixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxNotiflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
