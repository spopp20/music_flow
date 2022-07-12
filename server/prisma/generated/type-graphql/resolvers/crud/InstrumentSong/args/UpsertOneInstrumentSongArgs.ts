import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentSongCreateInput } from "../../../inputs/InstrumentSongCreateInput";
import { InstrumentSongUpdateInput } from "../../../inputs/InstrumentSongUpdateInput";
import { InstrumentSongWhereUniqueInput } from "../../../inputs/InstrumentSongWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneInstrumentSongArgs {
  @TypeGraphQL.Field(_type => InstrumentSongWhereUniqueInput, {
    nullable: false
  })
  where!: InstrumentSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => InstrumentSongCreateInput, {
    nullable: false
  })
  create!: InstrumentSongCreateInput;

  @TypeGraphQL.Field(_type => InstrumentSongUpdateInput, {
    nullable: false
  })
  update!: InstrumentSongUpdateInput;
}
