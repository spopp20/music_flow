import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongTagsCreateManyInput } from "../../../inputs/SongTagsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySongTagsArgs {
  @TypeGraphQL.Field(_type => [SongTagsCreateManyInput], {
    nullable: false
  })
  data!: SongTagsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
