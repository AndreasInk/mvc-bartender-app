import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BartenderComponentComponent } from './bartender-component.component';

describe('BartenderComponentComponent', () => {
  let component: BartenderComponentComponent;
  let fixture: ComponentFixture<BartenderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BartenderComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BartenderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
