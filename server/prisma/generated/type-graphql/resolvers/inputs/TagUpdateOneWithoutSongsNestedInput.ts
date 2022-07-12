import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutSongsInput } from "../inputs/TagCreateOrConnectWithoutSongsInput";
import { TagCreateWithoutSongsInput } from "../inputs/TagCreateWithoutSongsInput";
import { TagUpdateWithoutSongsInput } from "../inputs/TagUpdateWithoutSongsInput";
import { TagUpsertWithoutSongsInput } from "../inputs/TagUpsertWithoutSongsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateOneWithoutSongsNestedInput", {
  isAbstract: true
})
export class TagUpdateOneWithoutSongsNestedInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutSongsInput, {
    nullable: true
  })
  create?: TagCreateWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutSongsInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => TagUpsertWithoutSongsInput, {
    nullable: true
  })
  upsert?: TagUpsertWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateWithoutSongsInput, {
    nullable: true
  })
  update?: TagUpdateWithoutSongsInput | undefined;
}
