import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';

/* Configure routing rules - tell angular to display certain component from url */
const routes: Routes = [
  //ROOT of Application  show home component
  {path: '', component: HomeComponent},
  {path: 'genres', component: IndexGenresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
