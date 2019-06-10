import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipeKamarComponent } from './tipe-kamar.component';

describe('TipeKamarComponent', () => {
  let component: TipeKamarComponent;
  let fixture: ComponentFixture<TipeKamarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipeKamarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipeKamarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
