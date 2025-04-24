import { Component, OnInit } from '@angular/core';
import { HelloService } from './services/hello.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>{{ message }}</h1>`
})
export class AppComponent implements OnInit {
  message = 'Loading...';

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {
    this.helloService.getHello().subscribe({
      next: (res) => this.message = res,
      error: () => this.message = 'Failed to load message.'
    });
  }
}
