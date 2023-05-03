import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AsteroidesService } from './asteroides.service';

describe('AsteroidesService', () => {
  let service: AsteroidesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(AsteroidesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
