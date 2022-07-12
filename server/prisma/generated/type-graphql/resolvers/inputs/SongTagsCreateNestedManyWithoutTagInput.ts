import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsCreateManyTagInputEnvelope } from "../inputs/SongTagsCreateManyTagInputEnvelope";
import { SongTagsCreateOrConnectWithoutTagInput } from "../inputs/SongTagsCreateOrConnectWithoutTagInput";
import { SongTagsCreateWithoutTagInput } from "../inputs/SongTagsCreateWithoutTagInput";
import { SongTagsWhereUniqueInput } from "../inputs/SongTagsWhereUniqueInput";

@TypeGraphQL.InputType("SongTagsCreateNestedManyWithoutTagInput", {
  isAbstract: true
})
export class SongTagsCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [SongTagsCreateWithoutTagInput], {
    nullable: true
  })
  create?: SongTagsCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: SongTagsCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => SongTagsCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: SongTagsCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongTagsWhereUniqueInput], {
    nullable: true
  })
  connect?: SongTagsWhereUniqueInput[] | undefined;
}
