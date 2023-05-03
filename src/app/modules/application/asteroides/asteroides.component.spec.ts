import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AsteroidesComponent } from './asteroides.component';

describe('AsteroidesComponent', () => {
  let component: AsteroidesComponent;
  let fixture: ComponentFixture<AsteroidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [AsteroidesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
