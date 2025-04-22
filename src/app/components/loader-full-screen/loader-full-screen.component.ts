import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-full-screen',
  templateUrl: './loader-full-screen.component.html',
  styleUrls: ['./loader-full-screen.component.scss'],
})
export class LoaderFullScreenComponent implements OnInit {
  @Input() msg: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
