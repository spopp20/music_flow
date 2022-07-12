import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentSongWhereInput } from "../../../inputs/InstrumentSongWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyInstrumentSongArgs {
  @TypeGraphQL.Field(_type => InstrumentSongWhereInput, {
    nullable: true
  })
  where?: InstrumentSongWhereInput | undefined;
}
