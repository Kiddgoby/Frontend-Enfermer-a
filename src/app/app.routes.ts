import { Routes } from '@angular/router';
import { App } from './app';
import { Home } from './home/home';
import { NurseList } from './nurse-list/nurse-list';
import { NurseSearch } from './nurse-search/nurse-search';

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
