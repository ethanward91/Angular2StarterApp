import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name:'phonenumber'})
export class PhoneNumberPipe implements PipeTransform{
      transform(value: string, args:string[]){
            var phoneNumber:string;
        
            if(value.length == 10){
                phoneNumber = '(' + value.substring(0,3) + ') ' + value.substring(3, 6) + '-' + value.substring(6, value.length);
            }
            else{
                  phoneNumber = value.substring(0, 3) + '-' + value.substring(4, value.length);
            }
            return phoneNumber;
    }
}