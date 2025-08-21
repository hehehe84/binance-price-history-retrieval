import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type KlineDocument = Kline & Document;

@Schema()
export class Kline {
  @Prop({ required: true })
  symbol: string;

  @Prop({ required: true })
  interval: string;

  @Prop({ required: true })
  openTime: number;

  @Prop({ required: true })
  closeTime: number;

  @Prop({ required: true })
  openPrice: string;

  @Prop({ required: true })
  highPrice: string;

  @Prop({ required: true })
  lowPrice: string;

  @Prop({ required: true })
  closePrice: string;

  @Prop({ required: true })
  volume: string;

  @Prop({ required: true })
  quoteAssetVolume: string;

  @Prop({ required: true })
  numberOfTrades: number;

  @Prop({ required: true, type: String })
  takerBuyBaseAssetVolume: string;

  @Prop({ required: true, type: String })
  takerBuyQuoteAssetVolume: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const KlineSchema = SchemaFactory.createForClass(Kline);
