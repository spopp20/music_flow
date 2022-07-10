import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongCreateWithoutEventInput } from "../inputs/EventSongCreateWithoutEventInput";
import { EventSongWhereUniqueInput } from "../inputs/EventSongWhereUniqueInput";

@TypeGraphQL.InputType("EventSongCreateOrConnectWithoutEventInput", {
  isAbstract: true
})
export class EventSongCreateOrConnectWithoutEventInput {
  @TypeGraphQL.Field(_type => EventSongWhereUniqueInput, {
    nullable: false
  })
  where!: EventSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventSongCreateWithoutEventInput, {
    nullable: false
  })
  create!: EventSongCreateWithoutEventInput;
}
