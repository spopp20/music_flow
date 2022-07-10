import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongCreateManySongsInputEnvelope } from "../inputs/InstrumentSongCreateManySongsInputEnvelope";
import { InstrumentSongCreateOrConnectWithoutSongsInput } from "../inputs/InstrumentSongCreateOrConnectWithoutSongsInput";
import { InstrumentSongCreateWithoutSongsInput } from "../inputs/InstrumentSongCreateWithoutSongsInput";
import { InstrumentSongScalarWhereInput } from "../inputs/InstrumentSongScalarWhereInput";
import { InstrumentSongUpdateManyWithWhereWithoutSongsInput } from "../inputs/InstrumentSongUpdateManyWithWhereWithoutSongsInput";
import { InstrumentSongUpdateWithWhereUniqueWithoutSongsInput } from "../inputs/InstrumentSongUpdateWithWhereUniqueWithoutSongsInput";
import { InstrumentSongUpsertWithWhereUniqueWithoutSongsInput } from "../inputs/InstrumentSongUpsertWithWhereUniqueWithoutSongsInput";
import { InstrumentSongWhereUniqueInput } from "../inputs/InstrumentSongWhereUniqueInput";

@TypeGraphQL.InputType("InstrumentSongUpdateManyWithoutSongsNestedInput", {
  isAbstract: true
})
export class InstrumentSongUpdateManyWithoutSongsNestedInput {
  @TypeGraphQL.Field(_type => [InstrumentSongCreateWithoutSongsInput], {
    nullable: true
  })
  create?: InstrumentSongCreateWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongCreateOrConnectWithoutSongsInput], {
    nullable: true
  })
  connectOrCreate?: InstrumentSongCreateOrConnectWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongUpsertWithWhereUniqueWithoutSongsInput], {
    nullable: true
  })
  upsert?: InstrumentSongUpsertWithWhereUniqueWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongCreateManySongsInputEnvelope, {
    nullable: true
  })
  createMany?: InstrumentSongCreateManySongsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongWhereUniqueInput], {
    nullable: true
  })
  set?: InstrumentSongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongWhereUniqueInput], {
    nullable: true
  })
  disconnect?: InstrumentSongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongWhereUniqueInput], {
    nullable: true
  })
  delete?: InstrumentSongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongWhereUniqueInput], {
    nullable: true
  })
  connect?: InstrumentSongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongUpdateWithWhereUniqueWithoutSongsInput], {
    nullable: true
  })
  update?: InstrumentSongUpdateWithWhereUniqueWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongUpdateManyWithWhereWithoutSongsInput], {
    nullable: true
  })
  updateMany?: InstrumentSongUpdateManyWithWhereWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongScalarWhereInput], {
    nullable: true
  })
  deleteMany?: InstrumentSongScalarWhereInput[] | undefined;
}
