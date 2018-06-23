import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { AuthService } from "./auth.service";
@Injectable()
export class AdminServiceService {
  constructor(private http: Http, private auth: AuthService) {}

  getAllProfile() {
    this.auth.createAuthenticationHeader();
    return this.http
      .get(`${this.auth.domain}/api/profile/allProfile`,this.auth.options)
      .map(res => res.json());
  }

  deleteById(id){
    this.auth.createAuthenticationHeader();
    return this.http
      .delete(`${this.auth.domain}/api/profile/deleteById/${id}`,this.auth.options)
      .map(res => res.json());
  }

}
