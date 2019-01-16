import { Injectable, Injector } from '@angular/core';
import { DAFService } from '@lcu/api';
import { Status } from '@lcu/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NPMPublicService extends DAFService {
  //  Fields
  protected apiRoot: string;

  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);

    this.apiRoot = '/npm'
  }

  //  API Methods
  public Search(query: string, versions: boolean) {
    return this.get(`${this.apiRoot}/search?search=${query}&versions=${versions}`)
  }

  public Unpack(pkg: string, version: string, check?: boolean): Observable<Status> {
    return this.get(`${this.apiRoot}/unpack?pkg=${pkg}&version=${version}&check=${check}`)
  }

  //  Helpers
}
