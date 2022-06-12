import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {GettingStartedComponent} from './getting-started.component';

describe('GettingStartedComponent', () => {
  let component: GettingStartedComponent;
  let fixture: ComponentFixture<GettingStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [GettingStartedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show getting-started header', () => {
    expect(fixture.nativeElement.querySelector('[data-test="getting-started-header"]')).toBeTruthy();
  });

  it('should show getting-started logo', () => {
    expect(fixture.nativeElement.querySelector('[data-test="getting-started-logo"]')).toBeTruthy();
  });

  it('should show getting-started body', () => {
    expect(fixture.nativeElement.querySelector('[data-test="getting-started-body"]')).toBeTruthy();
  });

  it('should show getting-started footer', () => {
    expect(fixture.nativeElement.querySelector('[data-test="getting-started-footer"]')).toBeTruthy();
  });
});
