import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
 import 'rxjs/add/operator/map';
@Injectable()
export class VideoService {
  private _getUrl = "/api/videos";
  constructor(private _http: HttpClient) {
  }
  getVideos() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }
}
