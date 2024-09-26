import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=300'

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res=> {
        res.results.map((resPokemons: any) =>{
          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.stats = res
          )
        })
      })
    )
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        data => data
      )
    )
  }
  // get apiListAllPokemons(): Observable<any> {
  //   return this.http.get<any>(this.url).pipe(
  //     tap(res => res),
  //     map(res => {
  //       const requests = res.results.map((resPokemons: any) =>
  //         this.apiGetPokemons(resPokemons.url)
  //       );
  //       return forkJoin(requests).pipe(
  //         tap(pokemons => {
  //           res.results.forEach((resPokemons: any, index: number) => {
  //             resPokemons.status = pokemons[index];
  //           });
  //         })
  //       );
  //     })
  //   );
  // }
  // public apiGetPokemons(url: string): Observable<any> {
  //   return this.http.get<any>(url).pipe(
  //     map(data => data)
  //   );
  // }
}
