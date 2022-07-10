import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EventSongWhereInput } from "../../../inputs/EventSongWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEventSongArgs {
  @TypeGraphQL.Field(_type => EventSongWhereInput, {
    nullable: true
  })
  where?: EventSongWhereInput | undefined;
}
