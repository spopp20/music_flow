import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongAvgAggregate } from "../outputs/EventSongAvgAggregate";
import { EventSongCountAggregate } from "../outputs/EventSongCountAggregate";
import { EventSongMaxAggregate } from "../outputs/EventSongMaxAggregate";
import { EventSongMinAggregate } from "../outputs/EventSongMinAggregate";
import { EventSongSumAggregate } from "../outputs/EventSongSumAggregate";

@TypeGraphQL.ObjectType("EventSongGroupBy", {
  isAbstract: true
})
export class EventSongGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  eventId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  songId!: number | null;

  @TypeGraphQL.Field(_type => EventSongCountAggregate, {
    nullable: true
  })
  _count!: EventSongCountAggregate | null;

  @TypeGraphQL.Field(_type => EventSongAvgAggregate, {
    nullable: true
  })
  _avg!: EventSongAvgAggregate | null;

  @TypeGraphQL.Field(_type => EventSongSumAggregate, {
    nullable: true
  })
  _sum!: EventSongSumAggregate | null;

  @TypeGraphQL.Field(_type => EventSongMinAggregate, {
    nullable: true
  })
  _min!: EventSongMinAggregate | null;

  @TypeGraphQL.Field(_type => EventSongMaxAggregate, {
    nullable: true
  })
  _max!: EventSongMaxAggregate | null;
}
