import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.css',
  standalone: false
})

export class ButtonMenuComponent implements OnInit {
  @Input() description = '';
  @Input() selected = false;
  @Output() click = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.click.emit();
  }
}
