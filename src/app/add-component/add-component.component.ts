import { Component } from '@angular/core';
import { ManageMenuService } from '../menu-component/menu-component.service';
import { MenuComponentItem } from '../menu-component/menu-component-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-component.component.html',
  styleUrl: './add-component.component.css'
})
export class AddComponentComponent {
  constructor(service: ManageMenuService) {
    this.service = service
  }
  ngOnInit(): void {
     this.service.getAll().subscribe((items) => {
      this.menuItems = items;
      console.log(items)
    });
  }
  menuItems: MenuComponentItem[] = [];
  service: ManageMenuService;
}
