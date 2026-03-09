import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'join'})
export class ArrayJoinPipe implements PipeTransform
{
    transform(value: any[], separator: string = ', '): string {
        return value.map(x => x.toString()).join(separator);
    }
}