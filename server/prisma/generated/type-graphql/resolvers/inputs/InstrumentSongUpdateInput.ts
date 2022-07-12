import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InstrumentUpdateOneWithoutSongsNestedInput } from "../inputs/InstrumentUpdateOneWithoutSongsNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SongUpdateOneWithoutInstrumentsNestedInput } from "../inputs/SongUpdateOneWithoutInstrumentsNestedInput";

@TypeGraphQL.InputType("InstrumentSongUpdateInput", {
  isAbstract: true
})
export class InstrumentSongUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  notes?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  words?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  mimeType?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  file?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentUpdateOneWithoutSongsNestedInput, {
    nullable: true
  })
  instruments?: InstrumentUpdateOneWithoutSongsNestedInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneWithoutInstrumentsNestedInput, {
    nullable: true
  })
  songs?: SongUpdateOneWithoutInstrumentsNestedInput | undefined;
}
