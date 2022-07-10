import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentSongOrderByWithAggregationInput } from "../../../inputs/InstrumentSongOrderByWithAggregationInput";
import { InstrumentSongScalarWhereWithAggregatesInput } from "../../../inputs/InstrumentSongScalarWhereWithAggregatesInput";
import { InstrumentSongWhereInput } from "../../../inputs/InstrumentSongWhereInput";
import { InstrumentSongScalarFieldEnum } from "../../../../enums/InstrumentSongScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByInstrumentSongArgs {
  @TypeGraphQL.Field(_type => InstrumentSongWhereInput, {
    nullable: true
  })
  where?: InstrumentSongWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: InstrumentSongOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "notes" | "words" | "mimeType" | "file" | "createdAt" | "updatedAt" | "instrumentId" | "songId">;

  @TypeGraphQL.Field(_type => InstrumentSongScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: InstrumentSongScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
