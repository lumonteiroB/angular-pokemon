import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {

  private setAllPokemons: any;
  public getAllPokemons: any;

  public loading: boolean = false

  public apiError: boolean = false;

  constructor(
    private pokeApiService: PokeApiService
  ) {

  }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(): void {
    this.loading = true
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.loading = false
        this.setAllPokemons = res.results
        this.getAllPokemons = this.setAllPokemons
        console.log(res.results);
        
      },
      error => {
        this.apiError = true
        this.loading = false
      }
    )
  }


  public think(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter
  }
}
