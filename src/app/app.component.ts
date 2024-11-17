import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

declare var $:any;
declare var jQuery :any;
declare var jquery : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'TriveniSangamHotel';
  observer: MutationObserver;
  constructor(private elRef: ElementRef){

  }
  ngOnInit(): void{

  }
  ngAfterViewInit(): void {
    console.log('Dom change not detected...');
    this.observer = new MutationObserver(mutations => {
      console.log('Dom change detected...');
      //jQuery.getScript('assets/js/osahan.js');
    });
    var config = { attributes: true, childList: true, characterData: true };
    this.observer.observe(this.elRef.nativeElement, config);
  }
}
