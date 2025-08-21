import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type HistoricalDataDocument = HistoricalDataV1 & Document;

@Schema()
export class HistoricalDataV1 {
  @Prop({ required: true })
  ticker: string;

  @Prop({ required: true })
  timeInterval: string;

  @Prop({ required: true })
  startPeriod: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const HistoricalDataV1Schema =
  SchemaFactory.createForClass(HistoricalDataV1);
