import { Module } from '@nestjs/common';
import { UserModule } from './User/User.module';



@Module({
  imports: [UserModule],
  controllers: [],
  providers: []
})
export class AppModule {}
