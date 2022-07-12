import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentUpdateManyMutationInput } from "../../../inputs/InstrumentUpdateManyMutationInput";
import { InstrumentWhereInput } from "../../../inputs/InstrumentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyInstrumentArgs {
  @TypeGraphQL.Field(_type => InstrumentUpdateManyMutationInput, {
    nullable: false
  })
  data!: InstrumentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => InstrumentWhereInput, {
    nullable: true
  })
  where?: InstrumentWhereInput | undefined;
}
