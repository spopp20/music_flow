import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TagUpdateOneWithoutSongsNestedInput } from "../inputs/TagUpdateOneWithoutSongsNestedInput";

@TypeGraphQL.InputType("SongTagsUpdateWithoutSongInput", {
  isAbstract: true
})
export class SongTagsUpdateWithoutSongInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateOneWithoutSongsNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneWithoutSongsNestedInput | undefined;
}
