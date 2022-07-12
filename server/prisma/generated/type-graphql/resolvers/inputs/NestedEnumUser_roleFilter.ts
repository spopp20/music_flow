import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_role } from "../../enums/User_role";

@TypeGraphQL.InputType("NestedEnumUser_roleFilter", {
  isAbstract: true
})
export class NestedEnumUser_roleFilter {
  @TypeGraphQL.Field(_type => User_role, {
    nullable: true
  })
  equals?: "USER" | "EDITOR" | "LEADER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => [User_role], {
    nullable: true
  })
  in?: Array<"USER" | "EDITOR" | "LEADER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => [User_role], {
    nullable: true
  })
  notIn?: Array<"USER" | "EDITOR" | "LEADER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUser_roleFilter, {
    nullable: true
  })
  not?: NestedEnumUser_roleFilter | undefined;
}
