import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategotyListComponent } from './features/category/categoty-list/categoty-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';

const routes: Routes = [
    { path: 'admin/categories',
      component: CategotyListComponent
    },
    {
      path: 'admin/categories/add',
      component: AddCategoryComponent
    },
    { path: 'admin/categories/:id',
      component: EditCategoryComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }