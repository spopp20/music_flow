import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongScalarWhereInput } from "../inputs/InstrumentSongScalarWhereInput";
import { InstrumentSongUpdateManyMutationInput } from "../inputs/InstrumentSongUpdateManyMutationInput";

@TypeGraphQL.InputType("InstrumentSongUpdateManyWithWhereWithoutSongsInput", {
  isAbstract: true
})
export class InstrumentSongUpdateManyWithWhereWithoutSongsInput {
  @TypeGraphQL.Field(_type => InstrumentSongScalarWhereInput, {
    nullable: false
  })
  where!: InstrumentSongScalarWhereInput;

  @TypeGraphQL.Field(_type => InstrumentSongUpdateManyMutationInput, {
    nullable: false
  })
  data!: InstrumentSongUpdateManyMutationInput;
}
