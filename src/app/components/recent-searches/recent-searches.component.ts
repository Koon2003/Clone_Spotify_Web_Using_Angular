import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrl: './recent-searches.component.css',
  standalone: false,
})
export class RecentSearchesComponent implements OnInit {
  recentSearches = [
    'Top Brazil',
    'Top Global',
    'Country Warm-up',
    'Funk Hits',
    'Pagoda',
  ];

  fieldSearch = '';

  constructor() {}

  ngOnInit(): void {}

  defineSearch(recentSearch: string) {
    this.fieldSearch = recentSearch;
  }

  search() {
    console.log('Search .....', this.fieldSearch);
  }
}
