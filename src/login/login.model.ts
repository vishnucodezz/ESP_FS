import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export default class LoginModel {
  constructor(@Inject('prisma') private prisma: PrismaClient) {}

  /*public async login(name:string, email:string, password:string) {
    console.log('POST Data:', "name :", name,"email :", email, "password :",password);
    return await this.prisma.user.create({
      data: {
        name,
        email,
        password,
        
      },
    });
  }
}*/

public async login(data:{name:string, email:string, password:string}) {
  console.log('POST Data:', "name :", data.name,"email :", data.email, "password :",data.password);
  return await this.prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,  
    },
  });
}
}