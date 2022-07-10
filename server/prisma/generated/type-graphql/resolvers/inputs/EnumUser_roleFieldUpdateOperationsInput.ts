import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_role } from "../../enums/User_role";

@TypeGraphQL.InputType("EnumUser_roleFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumUser_roleFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => User_role, {
    nullable: true
  })
  set?: "USER" | "EDITOR" | "LEADER" | "ADMIN" | undefined;
}
