import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongScalarWhereInput } from "../inputs/EventSongScalarWhereInput";
import { EventSongUpdateManyMutationInput } from "../inputs/EventSongUpdateManyMutationInput";

@TypeGraphQL.InputType("EventSongUpdateManyWithWhereWithoutSongInput", {
  isAbstract: true
})
export class EventSongUpdateManyWithWhereWithoutSongInput {
  @TypeGraphQL.Field(_type => EventSongScalarWhereInput, {
    nullable: false
  })
  where!: EventSongScalarWhereInput;

  @TypeGraphQL.Field(_type => EventSongUpdateManyMutationInput, {
    nullable: false
  })
  data!: EventSongUpdateManyMutationInput;
}
