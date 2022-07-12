import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongTagsCreateInput } from "../../../inputs/SongTagsCreateInput";
import { SongTagsUpdateInput } from "../../../inputs/SongTagsUpdateInput";
import { SongTagsWhereUniqueInput } from "../../../inputs/SongTagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSongTagsArgs {
  @TypeGraphQL.Field(_type => SongTagsWhereUniqueInput, {
    nullable: false
  })
  where!: SongTagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongTagsCreateInput, {
    nullable: false
  })
  create!: SongTagsCreateInput;

  @TypeGraphQL.Field(_type => SongTagsUpdateInput, {
    nullable: false
  })
  update!: SongTagsUpdateInput;
}
