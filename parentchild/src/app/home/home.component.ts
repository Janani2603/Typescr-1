import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() parentData1!:string;
  @Input() parentData2!:number;
  @Input() parentData3!:string;
  @Input() parentData4!:string;
  @Input() parentData5!:number;
  @Input() parentData6!: string;

}
//where @ is there,,its child component that binds
