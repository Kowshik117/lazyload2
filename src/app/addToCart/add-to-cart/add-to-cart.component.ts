import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  favItem!: any;
  constructor(private data: ServiceService){

  }
  ngOnInit(): void {
   this.favItem=this.data.likedItem;
console.log(this.favItem);
  }

}
