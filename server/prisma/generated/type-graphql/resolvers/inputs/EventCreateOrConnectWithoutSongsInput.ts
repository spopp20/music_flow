import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateWithoutSongsInput } from "../inputs/EventCreateWithoutSongsInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventCreateOrConnectWithoutSongsInput", {
  isAbstract: true
})
export class EventCreateOrConnectWithoutSongsInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventCreateWithoutSongsInput, {
    nullable: false
  })
  create!: EventCreateWithoutSongsInput;
}
