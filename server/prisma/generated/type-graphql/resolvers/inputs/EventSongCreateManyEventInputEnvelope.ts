import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongCreateManyEventInput } from "../inputs/EventSongCreateManyEventInput";

@TypeGraphQL.InputType("EventSongCreateManyEventInputEnvelope", {
  isAbstract: true
})
export class EventSongCreateManyEventInputEnvelope {
  @TypeGraphQL.Field(_type => [EventSongCreateManyEventInput], {
    nullable: false
  })
  data!: EventSongCreateManyEventInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
