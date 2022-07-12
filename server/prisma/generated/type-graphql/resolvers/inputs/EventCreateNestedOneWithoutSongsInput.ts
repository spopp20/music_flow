import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateOrConnectWithoutSongsInput } from "../inputs/EventCreateOrConnectWithoutSongsInput";
import { EventCreateWithoutSongsInput } from "../inputs/EventCreateWithoutSongsInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventCreateNestedOneWithoutSongsInput", {
  isAbstract: true
})
export class EventCreateNestedOneWithoutSongsInput {
  @TypeGraphQL.Field(_type => EventCreateWithoutSongsInput, {
    nullable: true
  })
  create?: EventCreateWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => EventCreateOrConnectWithoutSongsInput, {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: true
  })
  connect?: EventWhereUniqueInput | undefined;
}
