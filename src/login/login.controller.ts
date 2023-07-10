import {
    Body,
    Controller,
    Delete,
    Get,
    Inject,
    Patch,
    Post,
  } from '@nestjs/common';
  import { LoginService } from './login.service';
import LoginDTO from './dto';
  
  @Controller('login')
  export class LoginController {
    constructor(@Inject(LoginService) private a: LoginService) {}
  
   /* @Post()
    public async getLogin(
      @Body() tata: { name: string; email: string; password: string },
    ) {
        const {name, email, password} = tata;
      return await this.loginModel.loginSevice(name, email, password);
    }
}*/

@Post()
public async getLogin( @Body('data') data: LoginDTO) {   
  return await this.a.loginSevice(data);
  }
}

    