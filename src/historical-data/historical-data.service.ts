import { Injectable } from '@nestjs/common';

@Injectable()
export class HistoricalDataService {
  //API URL used to retrieve data:
  BINANCE_BASE_URL = 'https://api.binance.com/api/v3';
}
