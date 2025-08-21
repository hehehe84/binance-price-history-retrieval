/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class KlinesDto {
  @ApiProperty({
    description: 'Trading pair symbol',
    example: 'BTCUSDC, ETHBNB',
  })
  @IsString()
  @IsNotEmpty()
  symbol: string;

  @ApiProperty({
    description: 'Kline Interval',
    example: '1h',
  })
  @IsEnum(['1s', '1m', '5m', '1h', '12h', '1d', '1w', '1M'])
  interval: string;

  @ApiProperty({
    description: 'Start time in milliseconds since epoch',
    example: 1655969280000,
  })
  @IsNumber()
  startTime: number;

  @ApiPropertyOptional({
    description: 'Number of klines to return. Default: 500, Max: 1000',
    example: 100,
    default: 500,
  })
  @IsOptional()
  @IsInt()
  limit?: number;
}
