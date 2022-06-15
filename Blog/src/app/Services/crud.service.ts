import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  listPost: Post[] = [];
  post: any;

  constructor(private route: Router) { }

  addPost(post: any) {
    let listPost = JSON.parse(localStorage.getItem('listPost') || '[]');
    listPost.push(post);
    localStorage.setItem('listPost', JSON.stringify(listPost));
    this.route.navigate(['/ListPost']);
  }

  getAllPost() {
    return JSON.parse(localStorage.getItem('listPost') || '[]');
  }

  getPostByIndex(i: any){
    let list = JSON.parse(localStorage.getItem('listPost') || '[]');
    return list[i];
   
  }
 
  deletePost(i: any) {
    this.listPost = JSON.parse(localStorage.getItem('listPost') || '[]');
    this.listPost.splice(i, 1);
    localStorage.setItem("listPost", JSON.stringify(this.listPost));
  }

  updatePost(i:any, post:any){
    this.listPost = JSON.parse(localStorage.getItem('listPost') || '[]');
    this.listPost.splice(i,1,post); 
    localStorage.setItem('listPost', JSON.stringify(this.listPost));
    this.route.navigate(['/ListPost']);
  }
}
