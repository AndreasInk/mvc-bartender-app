import { Component } from '@angular/core';
import { ManageMenuService } from '../menu-component/menu-component.service';
import { MenuComponentItem } from '../menu-component/menu-component-item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-bartender-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bartender-component.component.html',
  styleUrl: './bartender-component.component.css'
})
export class BartenderComponentComponent {
  constructor(service: ManageMenuService) {
    this.service = service
  }
  ngOnInit(): void {
     this.service.getQueue().subscribe((items) => {
      items.forEach(id => this.service.getItemByID(id).subscribe((items) => {
        this.menuItems = items;
      }));

      console.log(items)
    });
  }
  service: ManageMenuService;
  menuItems: MenuComponentItem[] = [];
}
