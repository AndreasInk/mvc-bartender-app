import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuComponentItem } from './menu-component-item.component';
@Injectable({
  providedIn: 'root'
})
export class ManageMenuService {
  private apiUrl = 'http://localhost:3000/menuItems';
  private apiQueueUrl = 'http://localhost:3000/queue';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<MenuComponentItem[]> {
    return this.httpClient.get<MenuComponentItem[]>(this.apiUrl);
  }

  getQueue(): Observable<Number[]> {
    return this.httpClient.get<Number[]>(this.apiUrl);
  }

  createItem(data: MenuComponentItem): Observable<MenuComponentItem> {
    return this.httpClient.post<MenuComponentItem>(this.apiUrl, data);
  }

  // Edit menu by ID
  edit(id: number): Observable<MenuComponentItem[]> {
    const params = new HttpParams().set('id', id.toString());
    return this.httpClient.get<MenuComponentItem[]>(this.apiUrl, { params });
  }

  // Get the item by ID using the query parameter
  getItemByID(id: Number): Observable<MenuComponentItem[]> {
    const params = { id: id.toString() };
    return this.httpClient.get<MenuComponentItem[]>(this.apiUrl, { params });
  }

  // Update the item by sending a PUT request directly to /opportunities/{id}
  updateItem(menuItem: MenuComponentItem): Observable<MenuComponentItem> {
    return this.httpClient.put<MenuComponentItem>(`${this.apiUrl}/${menuItem.id}`, menuItem);
  }

  addToQueue(menuItem: MenuComponentItem): Observable<MenuComponentItem> {
    return this.httpClient.post<MenuComponentItem>(`${this.apiQueueUrl}`, menuItem.id);
  }

  // Delete item by ID
  delete(id: string): Observable<void> {
    
    // Make the DELETE request using the ID as a query parameter
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}

