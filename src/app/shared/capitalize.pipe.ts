import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
    transform(value: any) {
        if (value) //check it isn't null
         {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
}
