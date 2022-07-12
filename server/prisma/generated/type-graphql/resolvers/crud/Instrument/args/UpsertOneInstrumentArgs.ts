import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentCreateInput } from "../../../inputs/InstrumentCreateInput";
import { InstrumentUpdateInput } from "../../../inputs/InstrumentUpdateInput";
import { InstrumentWhereUniqueInput } from "../../../inputs/InstrumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneInstrumentArgs {
  @TypeGraphQL.Field(_type => InstrumentWhereUniqueInput, {
    nullable: false
  })
  where!: InstrumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => InstrumentCreateInput, {
    nullable: false
  })
  create!: InstrumentCreateInput;

  @TypeGraphQL.Field(_type => InstrumentUpdateInput, {
    nullable: false
  })
  update!: InstrumentUpdateInput;
}
