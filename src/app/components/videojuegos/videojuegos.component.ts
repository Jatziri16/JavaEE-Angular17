import { Component, OnInit } from '@angular/core';
import { VideojuegosService } from '../../services/videojuegos.service';

@Component({
  selector: 'app-videojuegos',
  standalone: true,
  imports: [],
  templateUrl: './videojuegos.component.html',
  styleUrl: './videojuegos.component.css'
})
export class VideojuegosComponent implements OnInit {
  
  constructor(private _videojuegosService: VideojuegosService) { }

  ngOnInit(): void {
    this.getVideojuegos()
  }

  getVideojuegos()
  {
    this._videojuegosService.getVideojuegos().subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }
}
