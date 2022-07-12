import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EventSongUpdateInput } from "../../../inputs/EventSongUpdateInput";
import { EventSongWhereUniqueInput } from "../../../inputs/EventSongWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEventSongArgs {
  @TypeGraphQL.Field(_type => EventSongUpdateInput, {
    nullable: false
  })
  data!: EventSongUpdateInput;

  @TypeGraphQL.Field(_type => EventSongWhereUniqueInput, {
    nullable: false
  })
  where!: EventSongWhereUniqueInput;
}
