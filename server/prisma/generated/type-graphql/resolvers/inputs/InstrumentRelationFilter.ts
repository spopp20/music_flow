import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentWhereInput } from "../inputs/InstrumentWhereInput";

@TypeGraphQL.InputType("InstrumentRelationFilter", {
  isAbstract: true
})
export class InstrumentRelationFilter {
  @TypeGraphQL.Field(_type => InstrumentWhereInput, {
    nullable: true
  })
  is?: InstrumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentWhereInput, {
    nullable: true
  })
  isNot?: InstrumentWhereInput | undefined;
}
