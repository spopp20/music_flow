import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongTagsCreateInput } from "../../../inputs/SongTagsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSongTagsArgs {
  @TypeGraphQL.Field(_type => SongTagsCreateInput, {
    nullable: false
  })
  data!: SongTagsCreateInput;
}
