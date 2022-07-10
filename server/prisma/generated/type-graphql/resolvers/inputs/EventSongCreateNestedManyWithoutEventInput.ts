import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongCreateManyEventInputEnvelope } from "../inputs/EventSongCreateManyEventInputEnvelope";
import { EventSongCreateOrConnectWithoutEventInput } from "../inputs/EventSongCreateOrConnectWithoutEventInput";
import { EventSongCreateWithoutEventInput } from "../inputs/EventSongCreateWithoutEventInput";
import { EventSongWhereUniqueInput } from "../inputs/EventSongWhereUniqueInput";

@TypeGraphQL.InputType("EventSongCreateNestedManyWithoutEventInput", {
  isAbstract: true
})
export class EventSongCreateNestedManyWithoutEventInput {
  @TypeGraphQL.Field(_type => [EventSongCreateWithoutEventInput], {
    nullable: true
  })
  create?: EventSongCreateWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongCreateOrConnectWithoutEventInput], {
    nullable: true
  })
  connectOrCreate?: EventSongCreateOrConnectWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => EventSongCreateManyEventInputEnvelope, {
    nullable: true
  })
  createMany?: EventSongCreateManyEventInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EventSongWhereUniqueInput], {
    nullable: true
  })
  connect?: EventSongWhereUniqueInput[] | undefined;
}
