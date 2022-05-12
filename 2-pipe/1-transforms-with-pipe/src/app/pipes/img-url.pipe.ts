import { Pipe, PipeTransform } from '@angular/core';
import { IProductImage } from '../../../../../shared/mocks/2-pipes/product';

@Pipe({
	name: 'imgUrl',
})
// @ts-ignore
export class ImgUrlPipe implements PipeTransform {
	public transform(_images: IProductImage[] | undefined): string {
		if (!Array.isArray(_images)) {
			return '';
		}
		const [currentImg] = _images;
		if (!currentImg) {
			return '';
		}

		return `${currentImg?.url || ''}`;
	}
}
