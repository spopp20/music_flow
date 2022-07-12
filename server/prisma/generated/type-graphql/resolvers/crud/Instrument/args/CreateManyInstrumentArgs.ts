import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentCreateManyInput } from "../../../inputs/InstrumentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyInstrumentArgs {
  @TypeGraphQL.Field(_type => [InstrumentCreateManyInput], {
    nullable: false
  })
  data!: InstrumentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
