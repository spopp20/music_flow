import * as TypeGraphQL from "type-graphql";

export enum EventSongScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  eventId = "eventId",
  songId = "songId"
}
TypeGraphQL.registerEnumType(EventSongScalarFieldEnum, {
  name: "EventSongScalarFieldEnum",
  description: undefined,
});
