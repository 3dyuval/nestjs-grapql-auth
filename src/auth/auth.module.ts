import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LocalStrategy } from './local.strategy'
import { PassportModule } from '@nestjs/passport'
import { AuthResolver } from './auth.resolver'
import { UsersModule } from 'src/users/users.module'
import { AuthController } from './auth.controller'

@Module({
  imports: [PassportModule, UsersModule],
  providers: [AuthService, LocalStrategy, AuthResolver],
  controllers: [AuthController],
})
export class AuthModule {}
