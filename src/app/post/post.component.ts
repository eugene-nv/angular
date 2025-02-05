import { Component, Input } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  @Input() myPost!: Post;

}
