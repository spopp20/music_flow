import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongAvgAggregate } from "../outputs/InstrumentSongAvgAggregate";
import { InstrumentSongCountAggregate } from "../outputs/InstrumentSongCountAggregate";
import { InstrumentSongMaxAggregate } from "../outputs/InstrumentSongMaxAggregate";
import { InstrumentSongMinAggregate } from "../outputs/InstrumentSongMinAggregate";
import { InstrumentSongSumAggregate } from "../outputs/InstrumentSongSumAggregate";

@TypeGraphQL.ObjectType("AggregateInstrumentSong", {
  isAbstract: true
})
export class AggregateInstrumentSong {
  @TypeGraphQL.Field(_type => InstrumentSongCountAggregate, {
    nullable: true
  })
  _count!: InstrumentSongCountAggregate | null;

  @TypeGraphQL.Field(_type => InstrumentSongAvgAggregate, {
    nullable: true
  })
  _avg!: InstrumentSongAvgAggregate | null;

  @TypeGraphQL.Field(_type => InstrumentSongSumAggregate, {
    nullable: true
  })
  _sum!: InstrumentSongSumAggregate | null;

  @TypeGraphQL.Field(_type => InstrumentSongMinAggregate, {
    nullable: true
  })
  _min!: InstrumentSongMinAggregate | null;

  @TypeGraphQL.Field(_type => InstrumentSongMaxAggregate, {
    nullable: true
  })
  _max!: InstrumentSongMaxAggregate | null;
}
