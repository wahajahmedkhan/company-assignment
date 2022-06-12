import {getTestBed, TestBed} from '@angular/core/testing';
import {AppGuard, AuthService} from '@app-core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

describe('AppGuard', () => {
  let guard: AppGuard;
  let authService: AuthService;
  let injector: TestBed;
  const routerMock = {navigate: jest.fn().mockImplementation(() => Promise.resolve()), url: '/'};
  let canActivate: Observable<boolean>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppGuard, {provide: Router, useValue: routerMock}],
      imports: [HttpClientTestingModule],
    });
    injector = getTestBed();
    authService = injector.inject(AuthService);
    guard = injector.inject(AppGuard);
    canActivate = guard.canActivate() as Observable<boolean>;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should let an unAuthenticated user navigate to the Auth pages', () => {
    let res;
    canActivate.subscribe(value => (res = value));
    expect(res).toBeTruthy();
    expect(routerMock.navigate).not.toBeCalled();
  });

  it('should restrict an authenticated user to put getting-started pages Url in the browser', () => {
    authService.logInUser();
    let res;
    canActivate.subscribe(value => (res = value));
    expect(routerMock.navigate).toHaveBeenCalledWith(['/app']);
    expect(res).toBeFalsy();
  });

  it('should restrict an authenticated user to navigate to getting-started pages', () => {
    authService.logInUser();
    routerMock.url = '/app/dashboard';
    let res;
    canActivate.subscribe(value => (res = value));
    expect(res).toBeFalsy();
  });

  afterEach(() => {
    authService.logOutUser();
    routerMock.url = '/';
  });
});
