import { Controller, Get, Post, Render, Body, Param } from '@nestjs/common';
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

  @Get('edit')
  @Render('edit')
  public getEdit() {
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

  @Get('user')
  @Render('user')
  public getUsers() {
    return {};
  }

  @Get('articles')
  @Render('article')
  public getArticles() {
    return {};
  }

  @Get('update')
  @Render('update')
  public getUpdate() {
    return {};
  }

  // @Get(':id')
  // @Render('edit')
  // public getEdit(){
  //   return {};
  // }

  @Get('/edit/:id')
  findOne(@Param('id') id: string) {
    return this.appService.findData(+id);
    // `This action returns a #${id} cat`;
  }

  @Get('dynamic')
  @Render('dynamic')
  public dynamictt() {
    return {};
  }

  @Get(':id')
  @Render('[person]')
  public dynamic() {
    return {};
  }
}
