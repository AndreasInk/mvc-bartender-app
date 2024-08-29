import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponentComponent } from "./menu-component/menu-component.component";
import { HttpClient, HttpHandler } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClient],
  imports: [RouterModule, MenuComponentComponent]
})
export class AppComponent {
  title = 'mvc-bartender-app';
}
