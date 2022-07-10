import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentSongCreateInput } from "../../../inputs/InstrumentSongCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneInstrumentSongArgs {
  @TypeGraphQL.Field(_type => InstrumentSongCreateInput, {
    nullable: false
  })
  data!: InstrumentSongCreateInput;
}
