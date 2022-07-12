import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongCreateWithoutInstrumentsInput } from "../inputs/InstrumentSongCreateWithoutInstrumentsInput";
import { InstrumentSongWhereUniqueInput } from "../inputs/InstrumentSongWhereUniqueInput";

@TypeGraphQL.InputType("InstrumentSongCreateOrConnectWithoutInstrumentsInput", {
  isAbstract: true
})
export class InstrumentSongCreateOrConnectWithoutInstrumentsInput {
  @TypeGraphQL.Field(_type => InstrumentSongWhereUniqueInput, {
    nullable: false
  })
  where!: InstrumentSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => InstrumentSongCreateWithoutInstrumentsInput, {
    nullable: false
  })
  create!: InstrumentSongCreateWithoutInstrumentsInput;
}
