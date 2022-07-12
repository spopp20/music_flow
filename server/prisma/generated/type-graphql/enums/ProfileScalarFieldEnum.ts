import * as TypeGraphQL from "type-graphql";

export enum ProfileScalarFieldEnum {
  id = "id",
  bio = "bio",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userId = "userId"
}
TypeGraphQL.registerEnumType(ProfileScalarFieldEnum, {
  name: "ProfileScalarFieldEnum",
  description: undefined,
});
