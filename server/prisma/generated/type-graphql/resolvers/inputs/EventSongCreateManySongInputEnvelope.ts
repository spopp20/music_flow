import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongCreateManySongInput } from "../inputs/EventSongCreateManySongInput";

@TypeGraphQL.InputType("EventSongCreateManySongInputEnvelope", {
  isAbstract: true
})
export class EventSongCreateManySongInputEnvelope {
  @TypeGraphQL.Field(_type => [EventSongCreateManySongInput], {
    nullable: false
  })
  data!: EventSongCreateManySongInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
