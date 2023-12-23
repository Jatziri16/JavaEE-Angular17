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
  listVideojuegos: any = []
  
  constructor(private _videojuegosService: VideojuegosService) { }

  ngOnInit(): void {
    this.getVideojuegos()
  }

  getVideojuegos()
  {
    this._videojuegosService.getVideojuegos().subscribe(res => {
      this.listVideojuegos = res;
      console.log(this.listVideojuegos)
    }, err => {
      console.log(err)
    })
  }

  trackVideojuegos(index: number, listVideojuegos: any)
  {
    return listVideojuegos.cve_vid;
  }
}
