import * as TypeGraphQL from "type-graphql";

export enum User_role {
  USER = "USER",
  EDITOR = "EDITOR",
  LEADER = "LEADER",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(User_role, {
  name: "User_role",
  description: undefined,
});
