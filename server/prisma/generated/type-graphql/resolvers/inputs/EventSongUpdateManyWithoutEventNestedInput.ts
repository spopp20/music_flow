import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongCreateManyEventInputEnvelope } from "../inputs/EventSongCreateManyEventInputEnvelope";
import { EventSongCreateOrConnectWithoutEventInput } from "../inputs/EventSongCreateOrConnectWithoutEventInput";
import { EventSongCreateWithoutEventInput } from "../inputs/EventSongCreateWithoutEventInput";
import { EventSongScalarWhereInput } from "../inputs/EventSongScalarWhereInput";
import { EventSongUpdateManyWithWhereWithoutEventInput } from "../inputs/EventSongUpdateManyWithWhereWithoutEventInput";
import { EventSongUpdateWithWhereUniqueWithoutEventInput } from "../inputs/EventSongUpdateWithWhereUniqueWithoutEventInput";
import { EventSongUpsertWithWhereUniqueWithoutEventInput } from "../inputs/EventSongUpsertWithWhereUniqueWithoutEventInput";
import { EventSongWhereUniqueInput } from "../inputs/EventSongWhereUniqueInput";

@TypeGraphQL.InputType("EventSongUpdateManyWithoutEventNestedInput", {
  isAbstract: true
})
export class EventSongUpdateManyWithoutEventNestedInput {
  @TypeGraphQL.Field(_type => [EventSongCreateWithoutEventInput], {
    nullable: true
  })
  create?: EventSongCreateWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongCreateOrConnectWithoutEventInput], {
    nullable: true
  })
  connectOrCreate?: EventSongCreateOrConnectWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongUpsertWithWhereUniqueWithoutEventInput], {
    nullable: true
  })
  upsert?: EventSongUpsertWithWhereUniqueWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => EventSongCreateManyEventInputEnvelope, {
    nullable: true
  })
  createMany?: EventSongCreateManyEventInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EventSongWhereUniqueInput], {
    nullable: true
  })
  set?: EventSongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EventSongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongWhereUniqueInput], {
    nullable: true
  })
  delete?: EventSongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongWhereUniqueInput], {
    nullable: true
  })
  connect?: EventSongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongUpdateWithWhereUniqueWithoutEventInput], {
    nullable: true
  })
  update?: EventSongUpdateWithWhereUniqueWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongUpdateManyWithWhereWithoutEventInput], {
    nullable: true
  })
  updateMany?: EventSongUpdateManyWithWhereWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EventSongScalarWhereInput[] | undefined;
}
