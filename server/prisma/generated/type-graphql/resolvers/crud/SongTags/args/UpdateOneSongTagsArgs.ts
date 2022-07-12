import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongTagsUpdateInput } from "../../../inputs/SongTagsUpdateInput";
import { SongTagsWhereUniqueInput } from "../../../inputs/SongTagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSongTagsArgs {
  @TypeGraphQL.Field(_type => SongTagsUpdateInput, {
    nullable: false
  })
  data!: SongTagsUpdateInput;

  @TypeGraphQL.Field(_type => SongTagsWhereUniqueInput, {
    nullable: false
  })
  where!: SongTagsWhereUniqueInput;
}
