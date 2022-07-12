import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentCreateWithoutSongsInput } from "../inputs/InstrumentCreateWithoutSongsInput";
import { InstrumentWhereUniqueInput } from "../inputs/InstrumentWhereUniqueInput";

@TypeGraphQL.InputType("InstrumentCreateOrConnectWithoutSongsInput", {
  isAbstract: true
})
export class InstrumentCreateOrConnectWithoutSongsInput {
  @TypeGraphQL.Field(_type => InstrumentWhereUniqueInput, {
    nullable: false
  })
  where!: InstrumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => InstrumentCreateWithoutSongsInput, {
    nullable: false
  })
  create!: InstrumentCreateWithoutSongsInput;
}
