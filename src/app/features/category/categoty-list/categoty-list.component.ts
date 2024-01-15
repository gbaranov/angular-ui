import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categoty-list',
  templateUrl: './categoty-list.component.html',
  styleUrls: ['./categoty-list.component.css']
})
export class CategotyListComponent implements OnInit {

  categories$?: Observable<Category[]>;

  constructor(private categoryService: CategoryService) {

  }
  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
  }
}
