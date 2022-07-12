import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsCreateManyTagInputEnvelope } from "../inputs/SongTagsCreateManyTagInputEnvelope";
import { SongTagsCreateOrConnectWithoutTagInput } from "../inputs/SongTagsCreateOrConnectWithoutTagInput";
import { SongTagsCreateWithoutTagInput } from "../inputs/SongTagsCreateWithoutTagInput";
import { SongTagsScalarWhereInput } from "../inputs/SongTagsScalarWhereInput";
import { SongTagsUpdateManyWithWhereWithoutTagInput } from "../inputs/SongTagsUpdateManyWithWhereWithoutTagInput";
import { SongTagsUpdateWithWhereUniqueWithoutTagInput } from "../inputs/SongTagsUpdateWithWhereUniqueWithoutTagInput";
import { SongTagsUpsertWithWhereUniqueWithoutTagInput } from "../inputs/SongTagsUpsertWithWhereUniqueWithoutTagInput";
import { SongTagsWhereUniqueInput } from "../inputs/SongTagsWhereUniqueInput";

@TypeGraphQL.InputType("SongTagsUpdateManyWithoutTagNestedInput", {
  isAbstract: true
})
export class SongTagsUpdateManyWithoutTagNestedInput {
  @TypeGraphQL.Field(_type => [SongTagsCreateWithoutTagInput], {
    nullable: true
  })
  create?: SongTagsCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: SongTagsCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: SongTagsUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => SongTagsCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: SongTagsCreateManyTagInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SongTagsUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: SongTagsUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: SongTagsUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongTagsScalarWhereInput[] | undefined;
}
