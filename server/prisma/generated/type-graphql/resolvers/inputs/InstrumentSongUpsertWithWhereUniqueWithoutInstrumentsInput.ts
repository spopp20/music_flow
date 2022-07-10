import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongCreateWithoutInstrumentsInput } from "../inputs/InstrumentSongCreateWithoutInstrumentsInput";
import { InstrumentSongUpdateWithoutInstrumentsInput } from "../inputs/InstrumentSongUpdateWithoutInstrumentsInput";
import { InstrumentSongWhereUniqueInput } from "../inputs/InstrumentSongWhereUniqueInput";

@TypeGraphQL.InputType("InstrumentSongUpsertWithWhereUniqueWithoutInstrumentsInput", {
  isAbstract: true
})
export class InstrumentSongUpsertWithWhereUniqueWithoutInstrumentsInput {
  @TypeGraphQL.Field(_type => InstrumentSongWhereUniqueInput, {
    nullable: false
  })
  where!: InstrumentSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => InstrumentSongUpdateWithoutInstrumentsInput, {
    nullable: false
  })
  update!: InstrumentSongUpdateWithoutInstrumentsInput;

  @TypeGraphQL.Field(_type => InstrumentSongCreateWithoutInstrumentsInput, {
    nullable: false
  })
  create!: InstrumentSongCreateWithoutInstrumentsInput;
}
