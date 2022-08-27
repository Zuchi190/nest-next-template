import { Controller, Get, Post, Render, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateArticleDto } from '../articles/dto/create-article.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  home() {
    return {};
  }

  @Get('/api/articles')
  findAll() {
    return this.appService.findAll();
  }

  @Post('/api/articles')
  async createdata(@Body() createArticleDto: CreateArticleDto) {
    return this.appService.createData(createArticleDto);
  }

  @Get('/api/stories')
  public getStories() {
    return this.appService.getStories();
  }

  @Get('form')
  @Render('form')
  public getForms() {
    return {};
  }

  @Get('users')
  @Render('user')
  public getUsers() {
    return {};
  }

  @Get('articles')
  @Render('article')
  public getArticles() {
    return {};
  }
}
