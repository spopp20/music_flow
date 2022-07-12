import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentCreateOrConnectWithoutSongsInput } from "../inputs/InstrumentCreateOrConnectWithoutSongsInput";
import { InstrumentCreateWithoutSongsInput } from "../inputs/InstrumentCreateWithoutSongsInput";
import { InstrumentWhereUniqueInput } from "../inputs/InstrumentWhereUniqueInput";

@TypeGraphQL.InputType("InstrumentCreateNestedOneWithoutSongsInput", {
  isAbstract: true
})
export class InstrumentCreateNestedOneWithoutSongsInput {
  @TypeGraphQL.Field(_type => InstrumentCreateWithoutSongsInput, {
    nullable: true
  })
  create?: InstrumentCreateWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentCreateOrConnectWithoutSongsInput, {
    nullable: true
  })
  connectOrCreate?: InstrumentCreateOrConnectWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentWhereUniqueInput, {
    nullable: true
  })
  connect?: InstrumentWhereUniqueInput | undefined;
}
