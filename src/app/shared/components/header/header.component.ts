import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  
  search: string = '';
  @Output() emitResult: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  changeSearch() {
    this.emitResult.emit(this.search);
  }
}
