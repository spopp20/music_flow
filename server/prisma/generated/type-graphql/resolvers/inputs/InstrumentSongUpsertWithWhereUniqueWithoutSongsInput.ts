import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongCreateWithoutSongsInput } from "../inputs/InstrumentSongCreateWithoutSongsInput";
import { InstrumentSongUpdateWithoutSongsInput } from "../inputs/InstrumentSongUpdateWithoutSongsInput";
import { InstrumentSongWhereUniqueInput } from "../inputs/InstrumentSongWhereUniqueInput";

@TypeGraphQL.InputType("InstrumentSongUpsertWithWhereUniqueWithoutSongsInput", {
  isAbstract: true
})
export class InstrumentSongUpsertWithWhereUniqueWithoutSongsInput {
  @TypeGraphQL.Field(_type => InstrumentSongWhereUniqueInput, {
    nullable: false
  })
  where!: InstrumentSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => InstrumentSongUpdateWithoutSongsInput, {
    nullable: false
  })
  update!: InstrumentSongUpdateWithoutSongsInput;

  @TypeGraphQL.Field(_type => InstrumentSongCreateWithoutSongsInput, {
    nullable: false
  })
  create!: InstrumentSongCreateWithoutSongsInput;
}
