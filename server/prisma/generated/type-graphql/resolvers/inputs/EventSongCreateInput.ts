import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateNestedOneWithoutSongsInput } from "../inputs/EventCreateNestedOneWithoutSongsInput";
import { SongCreateNestedOneWithoutEventsInput } from "../inputs/SongCreateNestedOneWithoutEventsInput";

@TypeGraphQL.InputType("EventSongCreateInput", {
  isAbstract: true
})
export class EventSongCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => EventCreateNestedOneWithoutSongsInput, {
    nullable: true
  })
  event?: EventCreateNestedOneWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutEventsInput, {
    nullable: true
  })
  song?: SongCreateNestedOneWithoutEventsInput | undefined;
}
