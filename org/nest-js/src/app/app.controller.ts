import { Body, Controller, Get, Post, Query, } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) { }
  @Post()
  async Postdata(@Body() Data: CreateUserDto) {
    return this.appService.create(Data);
  }
  @Get()
  async getData() {
    return this.appService.retriveData();
  }

  @Get('login')
  async DataCheck(@Query('email') emailId: string, @Query('password') passwordIn: string): Promise<any> {
    return this.appService.verifyData(emailId, passwordIn);
  }
  DataValue: any[] = [];
  @Post('login')
  async backendCheck(): Promise<any> {
    return await this.appService.DataVerify();
  }
}
