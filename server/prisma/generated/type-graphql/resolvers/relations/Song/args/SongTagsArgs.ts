import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongTagsOrderByWithRelationInput } from "../../../inputs/SongTagsOrderByWithRelationInput";
import { SongTagsWhereInput } from "../../../inputs/SongTagsWhereInput";
import { SongTagsWhereUniqueInput } from "../../../inputs/SongTagsWhereUniqueInput";
import { SongTagsScalarFieldEnum } from "../../../../enums/SongTagsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class SongTagsArgs {
  @TypeGraphQL.Field(_type => SongTagsWhereInput, {
    nullable: true
  })
  where?: SongTagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongTagsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SongTagsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SongTagsWhereUniqueInput, {
    nullable: true
  })
  cursor?: SongTagsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SongTagsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "songId" | "tagId"> | undefined;
}
