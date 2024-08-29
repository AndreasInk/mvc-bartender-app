import { Component } from '@angular/core';
import { ManageMenuService } from '../menu-component/menu-component.service';
import { MenuComponentItem } from '../menu-component/menu-component-item.component';

@Component({
  selector: 'app-bartender-component',
  standalone: true,
  imports: [],
  templateUrl: './bartender-component.component.html',
  styleUrl: './bartender-component.component.css'
})
export class BartenderComponentComponent {
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
}
