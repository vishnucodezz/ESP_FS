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
  
  @Controller('login')
  export class LoginController {
    constructor(@Inject(LoginService) private loginModel: LoginService) {}
  
    @Post()
    public async getLogin(
      @Body() tata: { name: string; email: string; password: string },
    ) {
        const {name, email, password} = tata;
      return await this.loginModel.loginSevice(name, email, password);
    }
}

    