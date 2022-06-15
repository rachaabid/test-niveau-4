import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  listPost: Post[];

  constructor(private crud: CrudService) { 
    this.listPost = JSON.parse(localStorage.getItem('listPost') || '[]');;
  }

  ngOnInit(): void {
    this.listPost = this.crud.getAllPost();
  }

  supprimePost(i: any){
    this.crud.deletePost(i);
    this.ngOnInit();
  }

}
