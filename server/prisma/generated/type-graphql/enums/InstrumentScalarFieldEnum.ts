import * as TypeGraphQL from "type-graphql";

export enum InstrumentScalarFieldEnum {
  id = "id",
  name = "name",
  active = "active",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(InstrumentScalarFieldEnum, {
  name: "InstrumentScalarFieldEnum",
  description: undefined,
});
