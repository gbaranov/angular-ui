import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {

  model: AddCategoryRequest;
  private addCategotySubscription?: Subscription

  constructor(private categoryServic: CategoryService, private router: Router) {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }

  onFormSubmit() {
    this.addCategotySubscription = this.categoryServic.addCategory(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin');
      },
      error: (error) => {

      }
    })
  }

  ngOnDestroy(): void {
    this.addCategotySubscription?.unsubscribe();
  }

}
