import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongAvgAggregate } from "../outputs/InstrumentSongAvgAggregate";
import { InstrumentSongCountAggregate } from "../outputs/InstrumentSongCountAggregate";
import { InstrumentSongMaxAggregate } from "../outputs/InstrumentSongMaxAggregate";
import { InstrumentSongMinAggregate } from "../outputs/InstrumentSongMinAggregate";
import { InstrumentSongSumAggregate } from "../outputs/InstrumentSongSumAggregate";

@TypeGraphQL.ObjectType("InstrumentSongGroupBy", {
  isAbstract: true
})
export class InstrumentSongGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  words!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mimeType!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  file!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  instrumentId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  songId!: number | null;

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
