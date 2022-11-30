import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {


  public alumnos = [
    {nombre: 'Marta', turno: 'Tarde', calificacion: 8},
    {nombre: 'Carlos', turno: 'Mañana', calificacion: 4},
    {nombre: 'José', turno: 'Mañana', calificacion: 5},
    {nombre: 'Cecilia', turno: 'Tarde', calificacion: 7},
    {nombre: 'Julia', turno: 'Tarde', calificacion: 10}
  ]

  

  constructor() { }

  ngOnInit(): void {
  }

}
