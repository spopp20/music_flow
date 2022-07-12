import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateNestedOneWithoutSongsInput } from "../inputs/EventCreateNestedOneWithoutSongsInput";

@TypeGraphQL.InputType("EventSongCreateWithoutSongInput", {
  isAbstract: true
})
export class EventSongCreateWithoutSongInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => EventCreateNestedOneWithoutSongsInput, {
    nullable: true
  })
  event?: EventCreateNestedOneWithoutSongsInput | undefined;
}
