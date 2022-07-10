import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentAvgAggregate } from "../outputs/InstrumentAvgAggregate";
import { InstrumentCountAggregate } from "../outputs/InstrumentCountAggregate";
import { InstrumentMaxAggregate } from "../outputs/InstrumentMaxAggregate";
import { InstrumentMinAggregate } from "../outputs/InstrumentMinAggregate";
import { InstrumentSumAggregate } from "../outputs/InstrumentSumAggregate";

@TypeGraphQL.ObjectType("InstrumentGroupBy", {
  isAbstract: true
})
export class InstrumentGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  active!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => InstrumentCountAggregate, {
    nullable: true
  })
  _count!: InstrumentCountAggregate | null;

  @TypeGraphQL.Field(_type => InstrumentAvgAggregate, {
    nullable: true
  })
  _avg!: InstrumentAvgAggregate | null;

  @TypeGraphQL.Field(_type => InstrumentSumAggregate, {
    nullable: true
  })
  _sum!: InstrumentSumAggregate | null;

  @TypeGraphQL.Field(_type => InstrumentMinAggregate, {
    nullable: true
  })
  _min!: InstrumentMinAggregate | null;

  @TypeGraphQL.Field(_type => InstrumentMaxAggregate, {
    nullable: true
  })
  _max!: InstrumentMaxAggregate | null;
}
