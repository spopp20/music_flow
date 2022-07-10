import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentSongWhereUniqueInput } from "../../../inputs/InstrumentSongWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneInstrumentSongArgs {
  @TypeGraphQL.Field(_type => InstrumentSongWhereUniqueInput, {
    nullable: false
  })
  where!: InstrumentSongWhereUniqueInput;
}
