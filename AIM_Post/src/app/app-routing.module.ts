import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';


const routes: Routes = [{path: '', redirectTo: 'posts', pathMatch: 'full',},
                        {path: 'posts', component: PostListComponent,},
                        {path: 'posts/:id', component: PostDetailComponent,},
                        {path: 'add_post', component: AddPostComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
