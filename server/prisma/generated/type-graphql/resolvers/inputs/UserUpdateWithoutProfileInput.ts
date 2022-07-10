import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumUser_roleFieldUpdateOperationsInput } from "../inputs/EnumUser_roleFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { SessionUpdateManyWithoutUserNestedInput } from "../inputs/SessionUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TokenUpdateManyWithoutUserNestedInput } from "../inputs/TokenUpdateManyWithoutUserNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutProfileInput", {
  isAbstract: true
})
export class UserUpdateWithoutProfileInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumUser_roleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumUser_roleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  sessions?: SessionUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => TokenUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  tokens?: TokenUpdateManyWithoutUserNestedInput | undefined;
}
