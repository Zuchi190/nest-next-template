import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  home() {
    return {};
  }

  @Get('/api/stories')
  public getStories() {
    return this.appService.getStories();
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

  @Get('/api/articles')
  findAll() {
    return this.appService.findAll();
  }
}
