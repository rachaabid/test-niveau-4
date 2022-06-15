import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/post';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  Post: Post = new Post();
  postForm?: FormGroup;
  submitted = false;
  indexPost: any;
  listPost: Post[] = [];
  constructor(private crud: CrudService,
              private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.postForm = new FormGroup ({
      titre: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      categorie: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    })

    this.indexPost = this.route.snapshot.params['i']; 
    this.showData();
  }
 
  showData(){
    let post = this.crud.getPostByIndex(this.indexPost);
    this.postForm?.patchValue(post);  
  }


  enregistrerModification(){
   this.submitted = true;
   if (this.postForm?.invalid){
    return
  }
  this.crud.updatePost(this.indexPost, this.postForm?.value);
  }

}
