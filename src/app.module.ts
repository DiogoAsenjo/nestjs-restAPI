//Esse arquivo sempre como o principal, ele irá organizar todos os módulos de aplicação.
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule],
})
export class AppModule {}
