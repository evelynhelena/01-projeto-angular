import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo'
})
export class SexoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'M':
        return 'Masculino';
      case 'F':
        return 'Feminino';
      default:
        return 'Indefinido'
    }
  }

}
