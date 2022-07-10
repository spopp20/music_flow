import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTokensInput } from "../inputs/UserCreateOrConnectWithoutTokensInput";
import { UserCreateWithoutTokensInput } from "../inputs/UserCreateWithoutTokensInput";
import { UserUpdateWithoutTokensInput } from "../inputs/UserUpdateWithoutTokensInput";
import { UserUpsertWithoutTokensInput } from "../inputs/UserUpsertWithoutTokensInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutTokensNestedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutTokensNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTokensInput, {
    nullable: true
  })
  create?: UserCreateWithoutTokensInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTokensInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTokensInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTokensInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTokensInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTokensInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTokensInput | undefined;
}
