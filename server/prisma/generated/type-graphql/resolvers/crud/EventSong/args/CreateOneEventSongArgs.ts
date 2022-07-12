import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EventSongCreateInput } from "../../../inputs/EventSongCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEventSongArgs {
  @TypeGraphQL.Field(_type => EventSongCreateInput, {
    nullable: false
  })
  data!: EventSongCreateInput;
}
