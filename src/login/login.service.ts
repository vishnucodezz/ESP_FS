import { Injectable } from '@nestjs/common';
import LoginModel from './login.model';

@Injectable()
export class LoginService {
  constructor(private loginModel: LoginModel) {}
 /* public async loginSevice(name: string, email:string, password:string) {
    if (true) {
      return await this.loginModel.login(name, email, password);
    }
  }*/

  public async loginSevice(data:any) {
    if (true) {
      return await this.loginModel.login(data);
    }
  }

}