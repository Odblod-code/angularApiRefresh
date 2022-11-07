import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/hero';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.scss']
})
export class HeroParentComponent implements OnInit {
  heroes = HEROES;
  master = 'Master';

  constructor() { }

  ngOnInit(): void {
  }

}
