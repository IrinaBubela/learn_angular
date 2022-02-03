import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'stringJoinerPipe'})

export class stringJoinerPipe implements PipeTransform {
  transform(arr: string[], separator: string): string {
    const joinedArr = arr.join(separator);
    return joinedArr; 
  }
}