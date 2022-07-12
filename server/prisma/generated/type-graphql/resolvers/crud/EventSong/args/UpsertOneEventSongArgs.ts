import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EventSongCreateInput } from "../../../inputs/EventSongCreateInput";
import { EventSongUpdateInput } from "../../../inputs/EventSongUpdateInput";
import { EventSongWhereUniqueInput } from "../../../inputs/EventSongWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEventSongArgs {
  @TypeGraphQL.Field(_type => EventSongWhereUniqueInput, {
    nullable: false
  })
  where!: EventSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventSongCreateInput, {
    nullable: false
  })
  create!: EventSongCreateInput;

  @TypeGraphQL.Field(_type => EventSongUpdateInput, {
    nullable: false
  })
  update!: EventSongUpdateInput;
}
