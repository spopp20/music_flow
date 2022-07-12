import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("EventMinAggregate", {
  isAbstract: true
})
export class EventMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  active!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  venue!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  telephone!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDateTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
