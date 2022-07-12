import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentCreateInput } from "../../../inputs/InstrumentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneInstrumentArgs {
  @TypeGraphQL.Field(_type => InstrumentCreateInput, {
    nullable: false
  })
  data!: InstrumentCreateInput;
}
