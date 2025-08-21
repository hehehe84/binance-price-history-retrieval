import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { HistoricalDataService } from './historical-data.service';
import { KlinesDto } from './dto/klines.dto';

@Controller('historical-data')
export class HistoricalDataController {
  constructor(private readonly historicalDataService: HistoricalDataService) {}

  @Get()
  async getKlines(@Query() query: KlinesDto) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return await this.historicalDataService.getKlines(query);
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
