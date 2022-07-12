import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SongUpdateOneWithoutTagsNestedInput } from "../inputs/SongUpdateOneWithoutTagsNestedInput";

@TypeGraphQL.InputType("SongTagsUpdateWithoutTagInput", {
  isAbstract: true
})
export class SongTagsUpdateWithoutTagInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneWithoutTagsNestedInput, {
    nullable: true
  })
  song?: SongUpdateOneWithoutTagsNestedInput | undefined;
}
