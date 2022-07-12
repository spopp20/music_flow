import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongTagsWhereUniqueInput } from "../../../inputs/SongTagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSongTagsArgs {
  @TypeGraphQL.Field(_type => SongTagsWhereUniqueInput, {
    nullable: false
  })
  where!: SongTagsWhereUniqueInput;
}
