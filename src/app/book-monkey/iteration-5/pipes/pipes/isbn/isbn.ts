import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'isbn'
})
export class IsbnPipe implements PipeTransform {
  transform(value: string): any {
    if(value.length === 10){
      return `ISBN-10: ${value}`;

    }else if(value.length === 13){
      return `ISBN-13: ${value.substr(0,3)}-${value.substr(3)}`;

    }else{
      return null;
    }
  }
}
