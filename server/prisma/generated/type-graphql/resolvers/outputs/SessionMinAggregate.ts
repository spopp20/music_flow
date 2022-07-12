import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SessionMinAggregate", {
  isAbstract: true
})
export class SessionMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expiresAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  handle!: string | null;

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
}
