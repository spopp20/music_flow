import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateNestedOneWithoutEventsInput } from "../inputs/SongCreateNestedOneWithoutEventsInput";

@TypeGraphQL.InputType("EventSongCreateWithoutEventInput", {
  isAbstract: true
})
export class EventSongCreateWithoutEventInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutEventsInput, {
    nullable: true
  })
  song?: SongCreateNestedOneWithoutEventsInput | undefined;
}
