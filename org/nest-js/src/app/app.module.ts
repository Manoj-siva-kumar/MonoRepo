import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userDetails } from '../userDetails.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Secure@2004',
      database: 'loginDetails',
      entities: [userDetails],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([userDetails]),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
