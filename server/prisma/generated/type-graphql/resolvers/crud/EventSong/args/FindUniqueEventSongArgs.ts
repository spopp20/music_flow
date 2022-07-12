import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EventSongWhereUniqueInput } from "../../../inputs/EventSongWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEventSongArgs {
  @TypeGraphQL.Field(_type => EventSongWhereUniqueInput, {
    nullable: false
  })
  where!: EventSongWhereUniqueInput;
}
