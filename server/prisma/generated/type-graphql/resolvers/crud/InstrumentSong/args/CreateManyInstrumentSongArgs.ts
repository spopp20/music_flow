import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentSongCreateManyInput } from "../../../inputs/InstrumentSongCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyInstrumentSongArgs {
  @TypeGraphQL.Field(_type => [InstrumentSongCreateManyInput], {
    nullable: false
  })
  data!: InstrumentSongCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
