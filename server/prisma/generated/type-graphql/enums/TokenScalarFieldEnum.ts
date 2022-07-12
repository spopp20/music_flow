import * as TypeGraphQL from "type-graphql";

export enum TokenScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  hashedToken = "hashedToken",
  type = "type",
  expiresAt = "expiresAt",
  sentTo = "sentTo",
  userId = "userId"
}
TypeGraphQL.registerEnumType(TokenScalarFieldEnum, {
  name: "TokenScalarFieldEnum",
  description: undefined,
});
