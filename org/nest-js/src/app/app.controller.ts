import { Body, Controller, Get, Post,  } from '@nestjs/common';
import { AppService } from './app.service';
import { userDetails } from '../userDetails.entity';
import { CreateUserDto } from './user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  async Postdata(@Body() Data:CreateUserDto){
    return this.appService.create(Data);
  }
  @Get()
  async getData(){
    return this.appService.retriveData();
  }
}
