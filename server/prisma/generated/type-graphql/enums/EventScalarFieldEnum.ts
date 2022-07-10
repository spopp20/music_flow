import * as TypeGraphQL from "type-graphql";

export enum EventScalarFieldEnum {
  id = "id",
  name = "name",
  active = "active",
  description = "description",
  venue = "venue",
  location = "location",
  notes = "notes",
  telephone = "telephone",
  startDateTime = "startDateTime",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(EventScalarFieldEnum, {
  name: "EventScalarFieldEnum",
  description: undefined,
});
