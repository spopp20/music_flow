import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongTagsWhereInput } from "../../../inputs/SongTagsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySongTagsArgs {
  @TypeGraphQL.Field(_type => SongTagsWhereInput, {
    nullable: true
  })
  where?: SongTagsWhereInput | undefined;
}
