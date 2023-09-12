import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css'],
})
export class PromesasComponent implements OnInit {
  ngOnInit(): void {
    this.getUsuarios2().then((usuarios) => {
      console.log(usuarios);
    });

    // this.getUsuarios().then((usuarios) => console.log(usuarios));

    const promesa = new Promise((resolve, reject) => {
      if (false) {
        resolve('Hola mundo');
      } else {
        reject('Algo salio mal');
      }
    });

    promesa
      .then((mensaje) => {
        console.log(mensaje);
      })
      .catch((error) => console.log('Error en promesa', error));
    console.log('Fin del init');
  }

  getUsuarios() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users?page=2')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
  }

  getUsuarios2() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users?page=2')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
  }
}
