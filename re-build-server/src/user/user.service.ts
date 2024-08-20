import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { UserResponse } from './dto/userResponse.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService, // Inject JwtService
  ) {}

  async signup(userData: SignupDto): Promise<UserResponse> {
    const { email, password, firstName, lastName } = userData;
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = await bcrypt.hash(password, 10);
    this.userRepository.save(user);
    const access_token = this.jwtService.sign({
      email: user.email,
      sub: user.id,
    });
    return this.toUserResponse(user, access_token);
  }

  async login(userData: LoginDto): Promise<UserResponse> {
    const { email, password } = userData;
    const user = await this.userRepository.findOneByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT token
    const payload = { email: user.email, sub: user.id };
    const access_token = this.jwtService.sign(payload);

    return this.toUserResponse(user, access_token);
  }

  async findUserById(id: number): Promise<UserDto> {
    const user = await this.userRepository.findOneById(id);
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return this.toUserDto(user);
  }

  private toUserResponse(user: User, access_token: string): UserResponse {
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      access_token,
    };
  }

  private toUserDto(user: User): UserDto {
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }
}
