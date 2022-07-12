import * as TypeGraphQL from "type-graphql";

export enum SessionScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  expiresAt = "expiresAt",
  handle = "handle",
  hashedSessionToken = "hashedSessionToken",
  antiCSRFToken = "antiCSRFToken",
  publicData = "publicData",
  privateData = "privateData",
  userId = "userId"
}
TypeGraphQL.registerEnumType(SessionScalarFieldEnum, {
  name: "SessionScalarFieldEnum",
  description: undefined,
});
