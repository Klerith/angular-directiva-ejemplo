import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private elementRef: ElementRef ) {

    elementRef.nativeElement.style.backgroundColor = 'yellow';

  }

}
