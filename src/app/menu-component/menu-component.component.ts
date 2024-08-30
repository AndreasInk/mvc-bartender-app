import { Component, Input, OnInit } from '@angular/core';
import { MenuComponentItem } from './menu-component-item.component';
import { CommonModule, NgClass } from '@angular/common';
import { ManageMenuService } from './menu-component.service';


@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.css'
})
export class MenuComponentComponent implements OnInit {
  constructor(service: ManageMenuService) {
    this.service = service
  }
  ngOnInit(): void {
     this.service.getAll().subscribe((items) => {
      this.menuItems = items;
      console.log(items)
    });
  }
  service: ManageMenuService;
  menuItems: MenuComponentItem[] = [];
  
  addToCart(newItem: MenuComponentItem) {
    this.service.addToQueue(newItem);
  }
}