import { Component, ContentChild, ElementRef, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pro-child',
  templateUrl: './pro-child.component.html',
  styleUrls: ['./pro-child.component.css']
})

export class ProChildComponent {
  @ContentChild('headlines')
  element!:ElementRef;
  show(){
    console.log(this.element.nativeElement);
  }


ngOnInit():void{
  console.log('ngOnInit..')
}
ngOnChanges(changes: SimpleChanges):void{
  console.log('fm ngOnChanges');
}
ngOnDestroy():void{
  console.log('ngOnDestroyy..');
}
ngDoCheck(){
  console.log('ngOnCheck');
}
ngAfterContentChecked(){
  console.log('ngAfterContentChecked');
}
ngAfterViewChecked(){
  console.log('ngAfterViewChecked');
}

}
