import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  data: any;
constructor( private service:ServiceService, private route: Router ){}
ngOnInit(): void {

this.data= this.service.getData();
console.log(this.data);
}
goToView(value:any){

  this.route.navigate(['/view'],{ queryParams: {id: value } });

}
addToCart(element:any){
  this.service.pushData(element);

}
goToCart(){

  this.route.navigate(['/cart']);
}
goToSmile(){
  this.route.navigate(['/cart/smile']);
}
}
