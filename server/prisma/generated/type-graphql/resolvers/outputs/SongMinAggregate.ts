import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SongMinAggregate", {
  isAbstract: true
})
export class SongMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  active!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alias!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  startKey!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tempoCd!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  startWords!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  arrangement!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
