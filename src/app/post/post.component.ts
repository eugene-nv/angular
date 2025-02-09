import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  
  @Input() myPost!: Post;
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info') infoRef: ElementRef | undefined

  removePost() {
    this.onRemove.emit(this.myPost.id)
  }

  ngOnInit() {
    console.log(this.infoRef?.nativeElement)
  }
}
