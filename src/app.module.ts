import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { HistoricalDataModule } from './historical-data/historical-data.module';

@Module({
  imports: [DatabaseModule, HistoricalDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
