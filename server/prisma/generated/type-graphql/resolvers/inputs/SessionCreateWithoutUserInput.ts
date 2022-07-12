import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SessionCreateWithoutUserInput", {
  isAbstract: true
})
export class SessionCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expiresAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  handle!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  hashedSessionToken?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  antiCSRFToken?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  publicData?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  privateData?: string | undefined;
}
