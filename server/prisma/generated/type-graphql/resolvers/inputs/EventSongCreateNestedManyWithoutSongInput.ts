import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongCreateManySongInputEnvelope } from "../inputs/EventSongCreateManySongInputEnvelope";
import { EventSongCreateOrConnectWithoutSongInput } from "../inputs/EventSongCreateOrConnectWithoutSongInput";
import { EventSongCreateWithoutSongInput } from "../inputs/EventSongCreateWithoutSongInput";
import { EventSongWhereUniqueInput } from "../inputs/EventSongWhereUniqueInput";

@TypeGraphQL.InputType("EventSongCreateNestedManyWithoutSongInput", {
  isAbstract: true
})
export class EventSongCreateNestedManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [EventSongCreateWithoutSongInput], {
    nullable: true
  })
  create?: EventSongCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: EventSongCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => EventSongCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: EventSongCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EventSongWhereUniqueInput], {
    nullable: true
  })
  connect?: EventSongWhereUniqueInput[] | undefined;
}
