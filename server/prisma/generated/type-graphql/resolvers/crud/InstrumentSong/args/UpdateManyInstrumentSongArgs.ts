import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentSongUpdateManyMutationInput } from "../../../inputs/InstrumentSongUpdateManyMutationInput";
import { InstrumentSongWhereInput } from "../../../inputs/InstrumentSongWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyInstrumentSongArgs {
  @TypeGraphQL.Field(_type => InstrumentSongUpdateManyMutationInput, {
    nullable: false
  })
  data!: InstrumentSongUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => InstrumentSongWhereInput, {
    nullable: true
  })
  where?: InstrumentSongWhereInput | undefined;
}
