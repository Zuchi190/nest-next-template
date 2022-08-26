import { Injectable } from '@nestjs/common';
import { Story } from 'src/shared/types';
import { PrismaService } from 'src/prisma/prisma.service';

const stories: Story[] = [
  {
    id: 1,
    title: '国歌',
    description: '首相が豚と…',
  },
  {
    id: 2,
    title: '1500万メリット',
    description: '超管理社会',
  },
  {
    id: 3,
    title: '人生の軌跡のすべて',
    description: '記憶をデータとして正確に閲覧できる世界の話',
  },
];

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getStories() {
    return stories;
  }

  getUsers() {
    return {};
  }

  getArticles() {
    return {};
  }

  findAll() {
    return this.prisma.article.findMany({ where: { published: true } });
  }

  createData() {
    return this.prisma.article.create({
      data: {
        title: '最終データ確認',
        description: 'これで寝れます',
        body: 'もうPOSTももう少し',
      },
    });
  }

  getForms() {
    return {};
  }
}
