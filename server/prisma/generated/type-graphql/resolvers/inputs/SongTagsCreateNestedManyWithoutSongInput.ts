import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsCreateManySongInputEnvelope } from "../inputs/SongTagsCreateManySongInputEnvelope";
import { SongTagsCreateOrConnectWithoutSongInput } from "../inputs/SongTagsCreateOrConnectWithoutSongInput";
import { SongTagsCreateWithoutSongInput } from "../inputs/SongTagsCreateWithoutSongInput";
import { SongTagsWhereUniqueInput } from "../inputs/SongTagsWhereUniqueInput";

@TypeGraphQL.InputType("SongTagsCreateNestedManyWithoutSongInput", {
  isAbstract: true
})
export class SongTagsCreateNestedManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [SongTagsCreateWithoutSongInput], {
    nullable: true
  })
  create?: SongTagsCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: SongTagsCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => SongTagsCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: SongTagsCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongTagsWhereUniqueInput], {
    nullable: true
  })
  connect?: SongTagsWhereUniqueInput[] | undefined;
}
