import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  DiskHealthIndicator,
  HealthCheck,
  HealthCheckService,
  MemoryHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@Controller('app')
@ApiTags('app')
export class AppController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly db: TypeOrmHealthIndicator,
    private readonly memory: MemoryHealthIndicator,
    private readonly disk: DiskHealthIndicator,
  ) {}

  @Get('health')
  @HealthCheck()
  check(): any {
    return this.health.check([
      async (): Promise<any> =>
        this.db.pingCheck('database', { timeout: 3000 }),
      async (): Promise<any> =>
        this.memory.checkHeap('memory_heap', 200 * 1024 * 1024),
      async (): Promise<any> =>
        this.memory.checkRSS('memory_rss', 3000 * 1024 * 1024),
      async (): Promise<any> =>
        this.disk.checkStorage('storage', {
          thresholdPercent: 0.75,
          path: '/',
        }),
    ]);
  }

  @Get('')
  homepage(): any {
    return { message: 'Welcome to Re-Build App.' };
  }
}
