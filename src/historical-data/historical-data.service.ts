import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Kline, KlineDocument } from './schema/historical-data.schema';
import { Model } from 'mongoose';
import { KlinesDto } from './dto/klines.dto';
import axios from 'axios';

@Injectable()
export class HistoricalDataService {
  //API URL used to retrieve data:
  BINANCE_BASE_URL = 'https://api.binance.com/api/v3';

  constructor(
    @InjectModel(Kline.name) private klineModel: Model<KlineDocument>,
  ) {}

  async getKlines(params: KlinesDto): Promise<any[]> {
    try {
      const queryParams = new URLSearchParams({
        symbol: params.symbol,
        interval: params.interval,
        ...(params.startTime && { startTime: params.startTime.toString() }),
        ...(params.limit && { limit: params.limit.toString() }),
      });

      const response = await axios.get(
        `${this.BINANCE_BASE_URL}/klines?${queryParams}`,
      );

      // Saving klines inside mongoDB database - creation of a method in this service

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return response.data;
    } catch (error) {
      throw new Error(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        `Failed to fetch klines: ${error.response?.data?.msg || error.message}`,
      );
    }
  }
}
