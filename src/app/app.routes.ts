import { Routes } from '@angular/router';
import { NurseSearch } from './nurse-search/nurse-search';
export const routes: Routes = [
    {path: 'nurse-search', component: NurseSearch   }

import { Home } from './home/home';

export const routes: Routes = [
  {path: '', component: Home },
import { NurseList } from './nurse-list/nurse-list';
import { App } from './app';

export const routes: Routes = [    
    {
        path: ' ',
        component: App ,
    },
    {
        path: 'nurselist',
        component: NurseList,
    },
];
