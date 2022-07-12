import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Token_type } from "../../enums/Token_type";

@TypeGraphQL.InputType("EnumToken_typeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumToken_typeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Token_type, {
    nullable: true
  })
  set?: "RESET_PASSWORD" | undefined;
}
