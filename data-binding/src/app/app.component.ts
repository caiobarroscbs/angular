import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * String Interpolation: utilizar valores que propriedades 
   * possuem para mostra-los para o usuario
   */

  /**
   * property binding: utilizar valores de propriedades e
   * atribuí-los a atributos HTML
   */

  /**
   * event binding: utilizado para ouvir eventos da DOM dentro
   * do Angular
   */

  /**
   * two Way Data Biding:
   */
  title = 'Angular é muito bom!';
  n1: number = 0
  n2: number = 0
  tipoInput: string = 'text'

  somar(x: number, y: number) {
    return x + y
  }
  

  mudarTipoInput(): void {
    if (this.tipoInput == 'password'){
    this.tipoInput = 'text'
  } else {
    this.tipoInput = 'password'
  }
  }
}
