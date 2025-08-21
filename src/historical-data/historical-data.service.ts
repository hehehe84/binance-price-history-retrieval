import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Kline, KlineDocument } from './schema/historical-data.schema';
import { Model } from 'mongoose';

@Injectable()
export class HistoricalDataService {
  //API URL used to retrieve data:
  BINANCE_BASE_URL = 'https://api.binance.com/api/v3';

  constructor(
    @InjectModel(Kline.name) private klineModel: Model<KlineDocument>,
  ) {}

  async getKlines(params):
}
