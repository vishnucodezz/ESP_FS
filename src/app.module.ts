import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
//import { DatasourceModule } from './datasource/datasource.module';
import { PrismaModule } from './datasource/prisma/prisma.module';

@Module({
  imports: [LoginModule, PrismaModule.register()],
  controllers: [],
  providers: [],
})
export class AppModule {}
