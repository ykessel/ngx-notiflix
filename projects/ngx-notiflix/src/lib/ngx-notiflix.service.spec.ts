import { TestBed } from '@angular/core/testing';

import { NgxNotiflixService } from './ngx-notiflix.service';

describe('NgxNotiflixService', () => {
  let service: NgxNotiflixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNotiflixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
