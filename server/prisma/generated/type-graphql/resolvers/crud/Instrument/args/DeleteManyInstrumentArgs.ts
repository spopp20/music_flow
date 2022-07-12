import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentWhereInput } from "../../../inputs/InstrumentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyInstrumentArgs {
  @TypeGraphQL.Field(_type => InstrumentWhereInput, {
    nullable: true
  })
  where?: InstrumentWhereInput | undefined;
}
