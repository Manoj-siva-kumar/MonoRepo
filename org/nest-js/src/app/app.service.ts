import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userDetails } from '../userDetails.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

    constructor(
        @InjectRepository(userDetails)
        private readonly usercredentials: Repository<userDetails>
    ) { }

    async create(Data: Partial<userDetails>): Promise<any> {
        const newEntry = this.usercredentials.create(Data);
        return await this.usercredentials.save(newEntry);
    }

    async retriveData(): Promise<any[]> {
        return this.usercredentials.find();
    }


    DataValue: any[] = [];
    DataIn: any[] = [];

    async verifyData(emailID: string, passwordIn: string): Promise<any> {
        const user = await this.usercredentials.findOne({
            where: { email: emailID, password: passwordIn },
            select: ['email', 'password']
        });

        const check = await this.usercredentials.findOne({
            where: { email: emailID, password: passwordIn },
            select: ['firstname', 'lastname']
        });

        if (user && check) {
            this.DataValue.push(user);
            this.DataIn.push(check);
            return {
                isValid: true,
                firstname: check.firstname,
                lastname: check.lastname
            };
        } else {
            return {
                isValid: false,
                firstname: null,
                lastname: null
            };
        }
    }


    async DataVerify(): Promise<any> {
        return this.DataValue;
    }
}
