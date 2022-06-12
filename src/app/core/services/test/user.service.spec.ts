import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {UserService} from '@app-core';
import {lastValueFrom} from 'rxjs';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;
  const apiMocker = (method: string, url: string, expectedResponse: any, body?: any) => {
    const req = httpTestingController.expectOne({
      method: method,
      url,
    });
    req.flush(expectedResponse);
    return req;
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call GET method when getCountries() is called', async () => {
    const method = jest.spyOn(service, 'getUsers');
    const res = await Promise.all([lastValueFrom(service.getUsers()), apiMocker('GET', service.endPoints.users, [])]);
    expect(res[0]).toEqual([]);
    expect(method).toBeCalled();
  });
});
