/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCustomerGet
   */
  static readonly ApiCustomerGetPath = '/api/Customer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Customer>>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Customer>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Plain(params?: {

  }): Observable<Array<Customer>> {

    return this.apiCustomerGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Customer>>) => r.body as Array<Customer>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Customer>>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Customer>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Json(params?: {

  }): Observable<Array<Customer>> {

    return this.apiCustomerGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Customer>>) => r.body as Array<Customer>)
    );
  }

}
