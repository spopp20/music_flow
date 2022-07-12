import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentWhereUniqueInput } from "../../../inputs/InstrumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueInstrumentArgs {
  @TypeGraphQL.Field(_type => InstrumentWhereUniqueInput, {
    nullable: false
  })
  where!: InstrumentWhereUniqueInput;
}
