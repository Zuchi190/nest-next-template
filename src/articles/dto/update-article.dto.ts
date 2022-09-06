export class UpdateArticleDto {
  title!: string;

  description!: string;

  body!: string;

  published?: boolean = false;
}
