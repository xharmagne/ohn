import {Pipe, PipeTransform} from 'angular2/core';
import {Registrant} from './registrant';

@Pipe({
  name: 'listCount',
  pure: false
})
export class ListCountPipe implements PipeTransform {
  transform(value:Registrant[]) : number {

    if (!value) {
      return 0;
    }

    return value.length;
  }
}
