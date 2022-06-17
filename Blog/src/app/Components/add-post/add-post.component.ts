import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/post';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  Post: Post = new Post();
  postForm?: FormGroup;
  submitted = false;

  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.postForm = new FormGroup ({
      titre: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      categorie: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    })
  }

  ajouterPost(){
    this.submitted = true;
    if (this.postForm?.invalid){
      return
    }
    this.crud.addPost(this.postForm?.value);
  }

}
