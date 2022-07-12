import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EventSongOrderByWithAggregationInput } from "../../../inputs/EventSongOrderByWithAggregationInput";
import { EventSongScalarWhereWithAggregatesInput } from "../../../inputs/EventSongScalarWhereWithAggregatesInput";
import { EventSongWhereInput } from "../../../inputs/EventSongWhereInput";
import { EventSongScalarFieldEnum } from "../../../../enums/EventSongScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEventSongArgs {
  @TypeGraphQL.Field(_type => EventSongWhereInput, {
    nullable: true
  })
  where?: EventSongWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EventSongOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EventSongOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "eventId" | "songId">;

  @TypeGraphQL.Field(_type => EventSongScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EventSongScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
