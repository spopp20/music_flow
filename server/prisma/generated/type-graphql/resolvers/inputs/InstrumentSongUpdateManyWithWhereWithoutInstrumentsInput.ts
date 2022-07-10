import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongScalarWhereInput } from "../inputs/InstrumentSongScalarWhereInput";
import { InstrumentSongUpdateManyMutationInput } from "../inputs/InstrumentSongUpdateManyMutationInput";

@TypeGraphQL.InputType("InstrumentSongUpdateManyWithWhereWithoutInstrumentsInput", {
  isAbstract: true
})
export class InstrumentSongUpdateManyWithWhereWithoutInstrumentsInput {
  @TypeGraphQL.Field(_type => InstrumentSongScalarWhereInput, {
    nullable: false
  })
  where!: InstrumentSongScalarWhereInput;

  @TypeGraphQL.Field(_type => InstrumentSongUpdateManyMutationInput, {
    nullable: false
  })
  data!: InstrumentSongUpdateManyMutationInput;
}
