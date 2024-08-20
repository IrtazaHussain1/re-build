import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { JwtAuthGuard } from 'src/gaurds/jwt.gaurd';
import { User } from './user.decorator';
import { UserResponse } from './dto/userResponse.dto';
import { UserDto } from './dto/user.dto';

@ApiTags('user')
@Controller('user')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Sign up a new user' })
  @ApiResponse({ status: 201, description: 'User successfully created' })
  async signup(@Body() userData: SignupDto): Promise<UserResponse> {
    return await this.userService.signup(userData);
  }

  @Post('login')
  @ApiOperation({ summary: 'Log in a user' })
  @ApiResponse({ status: 200, description: 'User successfully logged in' })
  async login(@Body() userData: LoginDto): Promise<UserResponse> {
    return await this.userService.login(userData);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({
    status: 200,
    description: 'User profile retrieved successfully',
    type: UserDto,
  })
  async getProfile(@User() user: { userId: number }): Promise<UserDto> {
    return await this.userService.findUserById(user.userId);
  }
}
