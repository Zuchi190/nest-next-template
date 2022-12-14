import {
  Controller,
  Get,
  Post,
  Render,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateArticleDto } from '../articles/dto/create-article.dto';
import { UpdateArticleDto } from '../articles/dto/update-article.dto';

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

  @Get('/article/:id')
  @Render('/article/[article]')
  public dynamic(@Param('id') id: string) {
    return this.appService.findData(+id);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.appService.remove(+id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.appService.update(+id, updateArticleDto);
  }
}
