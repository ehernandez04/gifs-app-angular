import { Component, input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';
import { GifListItemComponent } from './gif-list-item/gif-list-item.component';

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  //TO DO: input string[];
  gifs = input.required<Gif[]>();
}
