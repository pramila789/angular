import { TestBed } from '@angular/core/testing';

import { MywebserviceService } from './mywebservice.service';

describe('MywebserviceService', () => {
  let service: MywebserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MywebserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
