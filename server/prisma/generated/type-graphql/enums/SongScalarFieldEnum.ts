import * as TypeGraphQL from "type-graphql";

export enum SongScalarFieldEnum {
  id = "id",
  title = "title",
  active = "active",
  alias = "alias",
  startKey = "startKey",
  tempoCd = "tempoCd",
  startWords = "startWords",
  arrangement = "arrangement",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(SongScalarFieldEnum, {
  name: "SongScalarFieldEnum",
  description: undefined,
});
