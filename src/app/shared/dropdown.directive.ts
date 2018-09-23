import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isopen=false;
  @HostListener('click') toggleOpen(){
    this.isopen=!this.isopen;
  }
  constructor() { }

}
