import * as TypeGraphQL from "type-graphql";

export enum InstrumentSongScalarFieldEnum {
  id = "id",
  notes = "notes",
  words = "words",
  mimeType = "mimeType",
  file = "file",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  instrumentId = "instrumentId",
  songId = "songId"
}
TypeGraphQL.registerEnumType(InstrumentSongScalarFieldEnum, {
  name: "InstrumentSongScalarFieldEnum",
  description: undefined,
});
