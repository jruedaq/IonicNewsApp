import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() id = 0;
  @Input() title;
  @Input() urlToImage;
  @Input() author;
  @Input() publishedAt;
  @Input() description;
  @Input() url;
  @Input() source;

  @Input() favorite = false;

  constructor() {
  }

  ngOnInit() {
  }

  addFav(titleD, urlToImageD, authorD, publishedAtD, descriptionD, urlD, sourceD): void {
    this.favorite = !this.favorite;

    const newElement = {
      title: titleD,
      urlToImage: urlToImageD,
      author: authorD,
      publishedAt: publishedAtD,
      description: descriptionD,
      url: urlD,
      source: sourceD
    };

    if (this.favorite) {
      this.setFavs(this.getFavs().concat(newElement));
    } else {
      this.removeFav(this.id);
    }
  }

  removeFav(id): void {
    const arr = this.getFavs();
    const i = arr.indexOf(id);
    this.setFavs(arr.splice(i, 1));
  }

  getFavs() {
    const json = localStorage.getItem('favs');
    return JSON.parse(json);
  }

  setFavs(newFavs: any) {
    localStorage.setItem('favs', JSON.stringify(newFavs));
  }
}
