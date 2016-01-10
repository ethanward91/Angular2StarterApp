import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'image'})
export class ImagePipe implements PipeTransform {
    transform(value: string, args:string[]){
        const _default = 'http://portfoliotheme.org/enigmatic/wp-content/uploads/sites/9/2012/07/placeholder1.jpg';
       return value || (args[0] || _default);
    }
}