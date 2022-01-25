import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'durationPipe'})

export class durationPipe implements PipeTransform {
  transform(mins: any): string {
    mins *= 60;
    var minutes = Math.floor(mins % 3600 / 60);
    var hours = Math.floor(mins / 3600);
    return (this.addZero(hours) + ':' + this.addZero(minutes));
  }

  addZero(n:number) { return (n < 10 ? '0' : '') + n; }
}