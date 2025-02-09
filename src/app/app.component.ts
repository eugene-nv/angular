import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostFormComponent, PostComponent, NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hello Fucking World';

  posts: Post[] = [
    {title: 'Что такое Lorem Ipsum?', text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.', id: 1},
    {title: 'Почему он используется?', text: ' Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст..', id: 2}
  ]

  updatePost(post: Post) {
    this.posts.unshift(post)
    console.log(post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
