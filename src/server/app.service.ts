import { Injectable } from '@nestjs/common';
import { Story } from 'src/shared/types';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from '../articles/dto/create-article.dto';
import { UpdateArticleDto } from '../articles/dto/update-article.dto';

const stories: Story[] = [
  {
    id: 1,
    title: '国歌',
    description: '首相を救出',
  },
  {
    id: 2,
    title: '1500万メリット',
    description: '超管理社会',
  },
  {
    id: 3,
    title: '人生の軌跡のすべて',
    description: '記憶をデータとして扱う',
  },
];

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getStories() {
    return stories;
  }

  getForms() {
    return {};
  }

  getUsers() {
    return {};
  }

  getArticles() {
    return {};
  }

  getUpdate() {
    return {};
  }

  findAll() {
    // return this.prisma.article.findMany({ where: { published: true } });
    return this.prisma.article.findMany();
  }

  // createData(data: any) {
  //   return this.prisma.article.create({
  //     data: {
  //       title: data.title,
  //       description: data.description,
  //       body: 'これはデフォルトです',
  //     },
  //   });
  // }

  createData(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({ data: createArticleDto });
  }

  findData(id: number) {
    return this.prisma.article.findUnique({ where: { id } });
  }

  getPersonal() {
    return {};
  }

  getEdit() {
    return {};
  }

  dynamic() {
    return {};
  }

  dynamictt() {
    return {};
  }

  remove(id: any) {
    return this.prisma.article.delete({ where: { id } });
  }

  testWrite(){
    return {};
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
}
}