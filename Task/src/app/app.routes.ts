import { Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

export const routes: Routes = [
    { path : 'add',component:AddTaskComponent},

    {path : '',component:ListTaskComponent},
    {path : 'edit/:id',component:EditTaskComponent}

];
