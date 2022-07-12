import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongCreateManySongInputEnvelope } from "../inputs/EventSongCreateManySongInputEnvelope";
import { EventSongCreateOrConnectWithoutSongInput } from "../inputs/EventSongCreateOrConnectWithoutSongInput";
import { EventSongCreateWithoutSongInput } from "../inputs/EventSongCreateWithoutSongInput";
import { EventSongScalarWhereInput } from "../inputs/EventSongScalarWhereInput";
import { EventSongUpdateManyWithWhereWithoutSongInput } from "../inputs/EventSongUpdateManyWithWhereWithoutSongInput";
import { EventSongUpdateWithWhereUniqueWithoutSongInput } from "../inputs/EventSongUpdateWithWhereUniqueWithoutSongInput";
import { EventSongUpsertWithWhereUniqueWithoutSongInput } from "../inputs/EventSongUpsertWithWhereUniqueWithoutSongInput";
import { EventSongWhereUniqueInput } from "../inputs/EventSongWhereUniqueInput";

@TypeGraphQL.InputType("EventSongUpdateManyWithoutSongNestedInput", {
  isAbstract: true
})
export class EventSongUpdateManyWithoutSongNestedInput {
  @TypeGraphQL.Field(_type => [EventSongCreateWithoutSongInput], {
    nullable: true
  })
  create?: EventSongCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: EventSongCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongUpsertWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  upsert?: EventSongUpsertWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => EventSongCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: EventSongCreateManySongInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [EventSongUpdateWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  update?: EventSongUpdateWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongUpdateManyWithWhereWithoutSongInput], {
    nullable: true
  })
  updateMany?: EventSongUpdateManyWithWhereWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EventSongScalarWhereInput[] | undefined;
}
