import { Module } from '@nestjs/common';
import { HistoricalDataService } from './historical-data.service';
import { HistoricalDataController } from './historical-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Kline, KlineSchema } from './schema/historical-data.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Kline.name, schema: KlineSchema }]),
  ],
  providers: [HistoricalDataService],
  controllers: [HistoricalDataController],
})
export class HistoricalDataModule {}
