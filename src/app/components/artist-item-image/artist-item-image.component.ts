import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-artist-item-image',
  templateUrl: './artist-item-image.component.html',
  styleUrl: './artist-item-image.component.css',
  standalone: false
})
export class ArtistItemImageComponent implements OnInit {
   @Input() imageUrl: string = '';
   @Output() click = new EventEmitter<void>(); 

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.click.emit();
  }
}
