import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeasePage } from './lease.page';

describe('LeasePage', () => {
  let component: LeasePage;
  let fixture: ComponentFixture<LeasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
