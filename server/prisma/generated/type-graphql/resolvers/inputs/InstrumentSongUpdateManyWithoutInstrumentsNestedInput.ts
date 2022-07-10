import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongCreateManyInstrumentsInputEnvelope } from "../inputs/InstrumentSongCreateManyInstrumentsInputEnvelope";
import { InstrumentSongCreateOrConnectWithoutInstrumentsInput } from "../inputs/InstrumentSongCreateOrConnectWithoutInstrumentsInput";
import { InstrumentSongCreateWithoutInstrumentsInput } from "../inputs/InstrumentSongCreateWithoutInstrumentsInput";
import { InstrumentSongScalarWhereInput } from "../inputs/InstrumentSongScalarWhereInput";
import { InstrumentSongUpdateManyWithWhereWithoutInstrumentsInput } from "../inputs/InstrumentSongUpdateManyWithWhereWithoutInstrumentsInput";
import { InstrumentSongUpdateWithWhereUniqueWithoutInstrumentsInput } from "../inputs/InstrumentSongUpdateWithWhereUniqueWithoutInstrumentsInput";
import { InstrumentSongUpsertWithWhereUniqueWithoutInstrumentsInput } from "../inputs/InstrumentSongUpsertWithWhereUniqueWithoutInstrumentsInput";
import { InstrumentSongWhereUniqueInput } from "../inputs/InstrumentSongWhereUniqueInput";

@TypeGraphQL.InputType("InstrumentSongUpdateManyWithoutInstrumentsNestedInput", {
  isAbstract: true
})
export class InstrumentSongUpdateManyWithoutInstrumentsNestedInput {
  @TypeGraphQL.Field(_type => [InstrumentSongCreateWithoutInstrumentsInput], {
    nullable: true
  })
  create?: InstrumentSongCreateWithoutInstrumentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongCreateOrConnectWithoutInstrumentsInput], {
    nullable: true
  })
  connectOrCreate?: InstrumentSongCreateOrConnectWithoutInstrumentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongUpsertWithWhereUniqueWithoutInstrumentsInput], {
    nullable: true
  })
  upsert?: InstrumentSongUpsertWithWhereUniqueWithoutInstrumentsInput[] | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongCreateManyInstrumentsInputEnvelope, {
    nullable: true
  })
  createMany?: InstrumentSongCreateManyInstrumentsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [InstrumentSongUpdateWithWhereUniqueWithoutInstrumentsInput], {
    nullable: true
  })
  update?: InstrumentSongUpdateWithWhereUniqueWithoutInstrumentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongUpdateManyWithWhereWithoutInstrumentsInput], {
    nullable: true
  })
  updateMany?: InstrumentSongUpdateManyWithWhereWithoutInstrumentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongScalarWhereInput], {
    nullable: true
  })
  deleteMany?: InstrumentSongScalarWhereInput[] | undefined;
}
