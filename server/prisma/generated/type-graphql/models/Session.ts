import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Session", {
  isAbstract: true
})
export class Session {
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
  expiresAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  handle!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  hashedSessionToken?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  antiCSRFToken?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  publicData?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  privateData?: string | null;

  user?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId?: number | null;
}
