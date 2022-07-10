import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongUpdateWithoutSongsInput } from "../inputs/InstrumentSongUpdateWithoutSongsInput";
import { InstrumentSongWhereUniqueInput } from "../inputs/InstrumentSongWhereUniqueInput";

@TypeGraphQL.InputType("InstrumentSongUpdateWithWhereUniqueWithoutSongsInput", {
  isAbstract: true
})
export class InstrumentSongUpdateWithWhereUniqueWithoutSongsInput {
  @TypeGraphQL.Field(_type => InstrumentSongWhereUniqueInput, {
    nullable: false
  })
  where!: InstrumentSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => InstrumentSongUpdateWithoutSongsInput, {
    nullable: false
  })
  data!: InstrumentSongUpdateWithoutSongsInput;
}
