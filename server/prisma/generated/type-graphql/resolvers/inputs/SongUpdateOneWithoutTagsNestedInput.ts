import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutTagsInput } from "../inputs/SongCreateOrConnectWithoutTagsInput";
import { SongCreateWithoutTagsInput } from "../inputs/SongCreateWithoutTagsInput";
import { SongUpdateWithoutTagsInput } from "../inputs/SongUpdateWithoutTagsInput";
import { SongUpsertWithoutTagsInput } from "../inputs/SongUpsertWithoutTagsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateOneWithoutTagsNestedInput", {
  isAbstract: true
})
export class SongUpdateOneWithoutTagsNestedInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutTagsInput, {
    nullable: true
  })
  create?: SongCreateWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutTagsInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpsertWithoutTagsInput, {
    nullable: true
  })
  upsert?: SongUpsertWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateWithoutTagsInput, {
    nullable: true
  })
  update?: SongUpdateWithoutTagsInput | undefined;
}
