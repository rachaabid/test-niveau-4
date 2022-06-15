import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './Components/add-post/add-post.component';
import { HomeComponent } from './Components/home/home.component';
import { ListPostComponent } from './Components/list-post/list-post.component';
import { LoginComponent } from './Components/login/login.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { RegisterComponent } from './Components/register/register.component';
import { UpdatePostComponent } from './Components/update-post/update-post.component';

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'AddPost', component: AddPostComponent},
  {path: 'ListPost', component: ListPostComponent},
  {path: 'UpdatePost/:i', component: UpdatePostComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  AddPostComponent,
  ListPostComponent,
  UpdatePostComponent,
  PageNotFoundComponent
]