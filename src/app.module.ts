import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import { LoggingModule } from './logging/logging.module';
import { KafkaModule } from './kafka/kafka.module';
import { CacheModule } from './cache/cache.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DomainModule, LoggingModule, KafkaModule, CacheModule, AuthModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
