import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongCreateWithoutSongInput } from "../inputs/EventSongCreateWithoutSongInput";
import { EventSongWhereUniqueInput } from "../inputs/EventSongWhereUniqueInput";

@TypeGraphQL.InputType("EventSongCreateOrConnectWithoutSongInput", {
  isAbstract: true
})
export class EventSongCreateOrConnectWithoutSongInput {
  @TypeGraphQL.Field(_type => EventSongWhereUniqueInput, {
    nullable: false
  })
  where!: EventSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventSongCreateWithoutSongInput, {
    nullable: false
  })
  create!: EventSongCreateWithoutSongInput;
}
