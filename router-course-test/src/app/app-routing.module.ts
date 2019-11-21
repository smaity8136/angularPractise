import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { NewslistComponent } from './newslist/newslist.component';
import { StorydetailComponent } from './storydetail/storydetail.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';

const routes: Routes = [
  {path: '', component: NewslistComponent},
  {path: 'news/:id', component: StorydetailComponent},
  {path: 'account', component: AccountComponent},
  {path: '**', component: InvalidpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

 }
