import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongTagsUpdateManyMutationInput } from "../../../inputs/SongTagsUpdateManyMutationInput";
import { SongTagsWhereInput } from "../../../inputs/SongTagsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySongTagsArgs {
  @TypeGraphQL.Field(_type => SongTagsUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongTagsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SongTagsWhereInput, {
    nullable: true
  })
  where?: SongTagsWhereInput | undefined;
}
