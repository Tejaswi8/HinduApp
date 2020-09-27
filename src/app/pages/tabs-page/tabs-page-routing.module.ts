import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
      {
        path: 'vedas',
        children: [
          {
            path: '',
            loadChildren: () => import('../vedas-list/vedas-list.module').then(m => m.VedasListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'vedas-details/:vedasId',
            loadChildren: () => import('../vedas-detail/vedas-detail.module').then(m => m.VedasDetailModule)
          }
        ]
      },
      {
        path: 'avtaras',
        children: [
          {
            path: '',
            loadChildren: () => import('../avtaras-list/avtaras-list.module').then(m => m.AvtarasListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'avtaras-details/:avtarasId',
            loadChildren: () => import('../avtaras-detail/avtaras-detail.module').then(m => m.AvtarasDetailModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: 'ramayan',
        children: [
          {
            path: '',
            loadChildren: () => import('../ramayan/ramayan.module').then(m => m.RamayanModule)
          }
        ]
      },
      {
        path: 'mahabharath',
        children: [
          {
            path: '',
            loadChildren: () => import('../mahabharath/mahabharath.module').then(m => m.MahabharathModule)
          }
        ]
      },
      {
        path: 'bhagavadGeetha',
        children: [
          {
            path: '',
            loadChildren: () => import('../bhagavadGeetha/bhagavadGeetha.module').then(m => m.BhagavadGeethaModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

