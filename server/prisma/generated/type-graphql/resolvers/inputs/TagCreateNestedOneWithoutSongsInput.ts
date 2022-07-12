import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutSongsInput } from "../inputs/TagCreateOrConnectWithoutSongsInput";
import { TagCreateWithoutSongsInput } from "../inputs/TagCreateWithoutSongsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateNestedOneWithoutSongsInput", {
  isAbstract: true
})
export class TagCreateNestedOneWithoutSongsInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutSongsInput, {
    nullable: true
  })
  create?: TagCreateWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutSongsInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;
}
