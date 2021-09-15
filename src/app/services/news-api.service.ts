import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private url = 'https://newsapi.org/v2/top-headlines?country=co&category=';
  private key = '2f3a7fe54ef44867ab1b035861120fa5';

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  public getCategory(category: string): Observable<any> {
    console.log('Set in ' + category);
    return this.http.get(this.url + category + '&apiKey=' + this.key);
  }
}
