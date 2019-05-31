import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPelis } from '../model/IPelis.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliService {

  private url: string = '';
  private apiKey: string = '2d67ed78';

  constructor(private http: HttpClient) { }

  searchMovies( title: string, type: string){
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apiKey=${this.apiKey}`;
    console.log(this.url);
    return this.http.get<IPelis>(this.url).pipe(map(results => results['Search']));
  }
  getDetails(id: string){
 return this.http.get<IPelis>(`http://www.omdbapi.com/?i=${id}&plot=full&apiKey=${this.apiKey}`)
  }
}
