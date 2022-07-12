import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentSongUpdateInput } from "../../../inputs/InstrumentSongUpdateInput";
import { InstrumentSongWhereUniqueInput } from "../../../inputs/InstrumentSongWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneInstrumentSongArgs {
  @TypeGraphQL.Field(_type => InstrumentSongUpdateInput, {
    nullable: false
  })
  data!: InstrumentSongUpdateInput;

  @TypeGraphQL.Field(_type => InstrumentSongWhereUniqueInput, {
    nullable: false
  })
  where!: InstrumentSongWhereUniqueInput;
}
