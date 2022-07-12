import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsCreateManySongInputEnvelope } from "../inputs/SongTagsCreateManySongInputEnvelope";
import { SongTagsCreateOrConnectWithoutSongInput } from "../inputs/SongTagsCreateOrConnectWithoutSongInput";
import { SongTagsCreateWithoutSongInput } from "../inputs/SongTagsCreateWithoutSongInput";
import { SongTagsScalarWhereInput } from "../inputs/SongTagsScalarWhereInput";
import { SongTagsUpdateManyWithWhereWithoutSongInput } from "../inputs/SongTagsUpdateManyWithWhereWithoutSongInput";
import { SongTagsUpdateWithWhereUniqueWithoutSongInput } from "../inputs/SongTagsUpdateWithWhereUniqueWithoutSongInput";
import { SongTagsUpsertWithWhereUniqueWithoutSongInput } from "../inputs/SongTagsUpsertWithWhereUniqueWithoutSongInput";
import { SongTagsWhereUniqueInput } from "../inputs/SongTagsWhereUniqueInput";

@TypeGraphQL.InputType("SongTagsUpdateManyWithoutSongNestedInput", {
  isAbstract: true
})
export class SongTagsUpdateManyWithoutSongNestedInput {
  @TypeGraphQL.Field(_type => [SongTagsCreateWithoutSongInput], {
    nullable: true
  })
  create?: SongTagsCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: SongTagsCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsUpsertWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  upsert?: SongTagsUpsertWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => SongTagsCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: SongTagsCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongTagsWhereUniqueInput], {
    nullable: true
  })
  set?: SongTagsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SongTagsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsWhereUniqueInput], {
    nullable: true
  })
  delete?: SongTagsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsWhereUniqueInput], {
    nullable: true
  })
  connect?: SongTagsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsUpdateWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  update?: SongTagsUpdateWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsUpdateManyWithWhereWithoutSongInput], {
    nullable: true
  })
  updateMany?: SongTagsUpdateManyWithWhereWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongTagsScalarWhereInput[] | undefined;
}
