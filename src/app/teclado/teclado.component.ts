import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teclado',
  standalone: true,
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css'],
  imports: [FormsModule] // Mantendo o FormsModule
})
export class TecladoComponent {
  public resultado: string = ''; // Inicializando a propriedade para o binding

  // Método para adicionar o valor ou operador ao resultado
  clicar(valor: string) {
    this.resultado += valor; // Adiciona o valor ao resultado
  }

  // Método para finalizar a operação e calcular o resultado
  finalizar() {
    try {
      this.resultado = eval(this.resultado).toString(); // Avalia a expressão matemática e converte para string
    } catch (e) {
      this.resultado = 'Erro'; // Se ocorrer um erro, exibe "Erro"
    }
  }

  // Método para limpar o resultado
  limpar() {
    this.resultado = ''; // Limpa o resultado
  }
}
