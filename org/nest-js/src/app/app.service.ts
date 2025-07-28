import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userDetails } from '../userDetails.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

    constructor(
        @InjectRepository(userDetails)
        private readonly usercredentials: Repository<userDetails>
    ){}

    async create(Data: Partial<userDetails>):Promise<any>{
        const newEntry = this.usercredentials.create(Data);
        return await this.usercredentials.save(newEntry);
    }

    async retriveData():Promise<any[]>{
        return this.usercredentials.find();
    }
}
