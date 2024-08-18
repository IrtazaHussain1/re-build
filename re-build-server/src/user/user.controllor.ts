import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('signup')
  async signup(@Body() userData: any) {
    return await this.userService.signup(userData);
  }

  @Post('login')
  async login(@Body() userData: any) {
    return await this.userService.login(userData);
  }
}
