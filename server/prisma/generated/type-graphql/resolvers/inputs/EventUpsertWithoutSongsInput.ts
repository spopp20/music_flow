import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateWithoutSongsInput } from "../inputs/EventCreateWithoutSongsInput";
import { EventUpdateWithoutSongsInput } from "../inputs/EventUpdateWithoutSongsInput";

@TypeGraphQL.InputType("EventUpsertWithoutSongsInput", {
  isAbstract: true
})
export class EventUpsertWithoutSongsInput {
  @TypeGraphQL.Field(_type => EventUpdateWithoutSongsInput, {
    nullable: false
  })
  update!: EventUpdateWithoutSongsInput;

  @TypeGraphQL.Field(_type => EventCreateWithoutSongsInput, {
    nullable: false
  })
  create!: EventCreateWithoutSongsInput;
}
