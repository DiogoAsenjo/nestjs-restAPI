import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

//Esse @Global serve para informar que esse módulo poderá ser usado em qualquer parte da aplicação.
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
