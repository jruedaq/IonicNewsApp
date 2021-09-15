import {Component, Input, OnInit} from '@angular/core';
import {NewsApiService} from '../services/news-api.service';

@Component({
  selector: 'app-tab-template',
  templateUrl: './tab-template.component.html',
  styleUrls: ['./tab-template.component.scss'],
})
export class TabTemplateComponent implements OnInit {

  @Input() title: string;
  @Input() category: string;
  list = [] ;

  constructor(private service: NewsApiService) {
  }

  ngOnInit(): void {
    this.service.getCategory(this.category).subscribe((response) => {
        this.list = response.articles;
      },
      // eslint-disable-next-line @typescript-eslint/no-shadow
      (error) => {
        console.log(error);
      }
    );
  }
}
