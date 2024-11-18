import { IPicsumImage } from "@/interfaces/IPicsumImage";

export class ImageModel {
  id: string;
  title: string;
  src: string;

  constructor(image: IPicsumImage) {
    this.id = image.id;
    this.title = `Photo by: ${image.author}`;
    this.src = `https://picsum.photos/id/${image.id}/400/400`;
  }

  static mapImages(images: IPicsumImage[]) {
    const mappedImages = images.map((image: IPicsumImage) => {
      return new ImageModel(image);
    });
    return mappedImages;
  }
}
