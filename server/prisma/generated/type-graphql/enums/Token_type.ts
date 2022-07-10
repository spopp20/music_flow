import * as TypeGraphQL from "type-graphql";

export enum Token_type {
  RESET_PASSWORD = "RESET_PASSWORD"
}
TypeGraphQL.registerEnumType(Token_type, {
  name: "Token_type",
  description: undefined,
});
