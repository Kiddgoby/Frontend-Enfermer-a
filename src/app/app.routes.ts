import { Routes } from '@angular/router';
import { Login  } from './login/login';

export const routes: Routes = [
    {path: 'login', component: Login },
import { NurseSearch } from './nurse-search/nurse-search';
import { Home } from './home/home';
import { NurseList } from './nurse-list/nurse-list';
import { App } from './app';

export const routes: Routes = [
    {path: '', component: Home },
    {path: 'nurse-search', component: NurseSearch},
    {
        path: ' ',
        component: App ,
    },
    {
        path: 'nurselist',
        component: NurseList,
    },
];
