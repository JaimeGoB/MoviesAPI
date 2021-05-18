import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorsComponent } from './actors/create-actors/create-actors.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { EditMovieTheaterComponent } from './movie-theaters/edit-movie-theater/edit-movie-theater.component';
import { IndexMovieTheaterComponent } from './movie-theaters/index-movie-theater/index-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';

/* Configure routing rules - tell angular to display certain component from url */
const routes: Routes = [
  //ROOT of Application  show home component
  {path: '', component: HomeComponent},

  {path: 'genres', component: IndexGenresComponent},
  {path: 'genres/create', component: CreateGenreComponent},
  {path: 'genres/edit/:id', component: EditGenreComponent},

  {path: 'actors', component: IndexActorsComponent},
  {path: 'actors/create', component: CreateActorsComponent},
  {path: 'actors/edit/:id', component: EditActorComponent},

  {path: 'movietheaters', component: IndexMovieTheaterComponent},
  {path: 'movietheaters/create', component: CreateMovieTheaterComponent},
  {path: 'movietheaters/edit/:id', component: EditMovieTheaterComponent},

  {path: 'movies/create', component: CreateMovieComponent},
  {path: 'movies/edit/:id', component: EditMovieComponent},

  {path: 'movies/filter', component: MovieFilterComponent},
  
  //Wild Card - reroutes to home component
  {path: '**', redirectTo:'' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
