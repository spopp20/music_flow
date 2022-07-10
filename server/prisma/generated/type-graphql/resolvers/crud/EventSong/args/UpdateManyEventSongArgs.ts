import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EventSongUpdateManyMutationInput } from "../../../inputs/EventSongUpdateManyMutationInput";
import { EventSongWhereInput } from "../../../inputs/EventSongWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEventSongArgs {
  @TypeGraphQL.Field(_type => EventSongUpdateManyMutationInput, {
    nullable: false
  })
  data!: EventSongUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EventSongWhereInput, {
    nullable: true
  })
  where?: EventSongWhereInput | undefined;
}
