import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtFooterComponent } from './dt-footer.component';

describe('DtFooterComponent', () => {
  let component: DtFooterComponent;
  let fixture: ComponentFixture<DtFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
