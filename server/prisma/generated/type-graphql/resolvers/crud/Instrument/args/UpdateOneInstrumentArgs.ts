import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentUpdateInput } from "../../../inputs/InstrumentUpdateInput";
import { InstrumentWhereUniqueInput } from "../../../inputs/InstrumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneInstrumentArgs {
  @TypeGraphQL.Field(_type => InstrumentUpdateInput, {
    nullable: false
  })
  data!: InstrumentUpdateInput;

  @TypeGraphQL.Field(_type => InstrumentWhereUniqueInput, {
    nullable: false
  })
  where!: InstrumentWhereUniqueInput;
}
