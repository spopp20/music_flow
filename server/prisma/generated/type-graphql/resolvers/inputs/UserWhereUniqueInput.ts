import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserEmailActiveCompoundUniqueInput } from "../inputs/UserEmailActiveCompoundUniqueInput";

@TypeGraphQL.InputType("UserWhereUniqueInput", {
  isAbstract: true
})
export class UserWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => UserEmailActiveCompoundUniqueInput, {
    nullable: true
  })
  email_active?: UserEmailActiveCompoundUniqueInput | undefined;
}
