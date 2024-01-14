import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStock } from '../Interfaces/istock';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class StocksService {
   private urlBase:String = 
   'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Stock.Controller.php?op=';
    constructor(private clientePhp:HttpClient) {}
  
    todos():Observable<IStock[]>{
      return this.clientePhp.get<IStock[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<IStock>{
     var sto = new FormData();
     sto.append('stockId', id.toString());
    return this.clientePhp.post<IStock>(this.urlBase + 'uno',sto);
  }
  
  insertar(stock:IStock):Observable<any>{
    var sto = new FormData();
    sto.append('ProductoId', stock.ProductoId.toString());
    sto.append('ProveedorId', stock.ProveedorId.toString());
    sto.append('Cantidad', stock.Cantidad.toString());
    sto.append('Precio_Venta', stock.Precio_Venta.toString());
    return this.clientePhp.post(this.urlBase + 'insertar', sto);
  
  }
  actualizar(stock:IStock, id: number):Observable<any>{
    var sto = new FormData();
    sto.append('stockId', id.toString());
    sto.append('ProductoId', stock.ProductoId.toString());
    sto.append('ProveedorId', stock.ProveedorId.toString());
    sto.append('Cantidad', stock.Cantidad.toString());
    sto.append('Precio_Venta', stock.Precio_Venta.toString());
    return this.clientePhp.post(this.urlBase + 'actualizar', sto);
  }
  eliminar(id:number):Observable<any>{
    var sto = new FormData();
    sto.append('stockId', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', sto);
  }
  

  }