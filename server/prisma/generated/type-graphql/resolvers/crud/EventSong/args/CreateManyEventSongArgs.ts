import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EventSongCreateManyInput } from "../../../inputs/EventSongCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEventSongArgs {
  @TypeGraphQL.Field(_type => [EventSongCreateManyInput], {
    nullable: false
  })
  data!: EventSongCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
