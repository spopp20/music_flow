import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutTagsInput } from "../inputs/SongCreateOrConnectWithoutTagsInput";
import { SongCreateWithoutTagsInput } from "../inputs/SongCreateWithoutTagsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateNestedOneWithoutTagsInput", {
  isAbstract: true
})
export class SongCreateNestedOneWithoutTagsInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutTagsInput, {
    nullable: true
  })
  create?: SongCreateWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutTagsInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;
}
