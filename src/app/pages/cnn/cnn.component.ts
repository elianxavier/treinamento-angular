import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-cnn',
  templateUrl: './cnn.component.html',
  styleUrls: ['./cnn.component.scss']
})
export class CnnComponent {
  title: String | any;
  pages: any;
  contents: Array<any> = [];
  constructor(
    private router: ActivatedRoute,
    private pagesService: PagesService
  ){
    this.router.params.subscribe(param => {      
      this.title = param?.['page']; 
      console.log(this.title)   
    })
  }

  ngOnInit(){
    this.getPages();
  }

  getPages(){
    this.pagesService.getPages().subscribe(
      (response: any) => {
        this.pages = response.data
        this.filterPageContents(this.pages)
      }
    )
  }

  filterPageContents(pages: any){
    pages.forEach((page: any) => {      
      if(page?.name == this.title){
        this.contents = page?.contents
      }
    })
    console.log(this.contents)
  }



}
