import * as TypeGraphQL from "type-graphql";

export enum SongTagsScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  songId = "songId",
  tagId = "tagId"
}
TypeGraphQL.registerEnumType(SongTagsScalarFieldEnum, {
  name: "SongTagsScalarFieldEnum",
  description: undefined,
});
