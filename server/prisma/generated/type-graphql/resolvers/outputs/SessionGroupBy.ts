import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionAvgAggregate } from "../outputs/SessionAvgAggregate";
import { SessionCountAggregate } from "../outputs/SessionCountAggregate";
import { SessionMaxAggregate } from "../outputs/SessionMaxAggregate";
import { SessionMinAggregate } from "../outputs/SessionMinAggregate";
import { SessionSumAggregate } from "../outputs/SessionSumAggregate";

@TypeGraphQL.ObjectType("SessionGroupBy", {
  isAbstract: true
})
export class SessionGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expiresAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  handle!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  hashedSessionToken!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  antiCSRFToken!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  publicData!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  privateData!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId!: number | null;

  @TypeGraphQL.Field(_type => SessionCountAggregate, {
    nullable: true
  })
  _count!: SessionCountAggregate | null;

  @TypeGraphQL.Field(_type => SessionAvgAggregate, {
    nullable: true
  })
  _avg!: SessionAvgAggregate | null;

  @TypeGraphQL.Field(_type => SessionSumAggregate, {
    nullable: true
  })
  _sum!: SessionSumAggregate | null;

  @TypeGraphQL.Field(_type => SessionMinAggregate, {
    nullable: true
  })
  _min!: SessionMinAggregate | null;

  @TypeGraphQL.Field(_type => SessionMaxAggregate, {
    nullable: true
  })
  _max!: SessionMaxAggregate | null;
}
