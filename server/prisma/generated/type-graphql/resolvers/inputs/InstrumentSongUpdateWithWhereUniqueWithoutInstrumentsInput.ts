import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongUpdateWithoutInstrumentsInput } from "../inputs/InstrumentSongUpdateWithoutInstrumentsInput";
import { InstrumentSongWhereUniqueInput } from "../inputs/InstrumentSongWhereUniqueInput";

@TypeGraphQL.InputType("InstrumentSongUpdateWithWhereUniqueWithoutInstrumentsInput", {
  isAbstract: true
})
export class InstrumentSongUpdateWithWhereUniqueWithoutInstrumentsInput {
  @TypeGraphQL.Field(_type => InstrumentSongWhereUniqueInput, {
    nullable: false
  })
  where!: InstrumentSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => InstrumentSongUpdateWithoutInstrumentsInput, {
    nullable: false
  })
  data!: InstrumentSongUpdateWithoutInstrumentsInput;
}
