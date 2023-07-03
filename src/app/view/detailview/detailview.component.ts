import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent {
  paramId!: any;
  viewData!:any;

    constructor(private aRoute: ActivatedRoute, private data: ServiceService ){}
    ngOnInit(): void {
    this.paramId =  this.aRoute.snapshot.queryParams['id'];
 this.viewData= this.data.getData().filter(x=>x.id==this.paramId);
 console.log(this.viewData);
    }

}
