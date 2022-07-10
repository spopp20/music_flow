import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongTagsOrderByWithAggregationInput } from "../../../inputs/SongTagsOrderByWithAggregationInput";
import { SongTagsScalarWhereWithAggregatesInput } from "../../../inputs/SongTagsScalarWhereWithAggregatesInput";
import { SongTagsWhereInput } from "../../../inputs/SongTagsWhereInput";
import { SongTagsScalarFieldEnum } from "../../../../enums/SongTagsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySongTagsArgs {
  @TypeGraphQL.Field(_type => SongTagsWhereInput, {
    nullable: true
  })
  where?: SongTagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongTagsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SongTagsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "songId" | "tagId">;

  @TypeGraphQL.Field(_type => SongTagsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SongTagsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
