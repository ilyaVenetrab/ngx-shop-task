import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
	public transform(_value: number): number | undefined {
		if (_value - Math.trunc(_value) < 0.25) {
			return Math.trunc(_value);
		} else if (_value - Math.trunc(_value) >= 0.25 && _value - Math.trunc(_value) < 0.75) {
			return Math.trunc(_value) + 0.5;
		} else {
			return Math.trunc(_value) + 1;
		}
	}
}
