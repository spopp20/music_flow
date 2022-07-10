import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutSongsInput } from "../inputs/TagCreateWithoutSongsInput";
import { TagUpdateWithoutSongsInput } from "../inputs/TagUpdateWithoutSongsInput";

@TypeGraphQL.InputType("TagUpsertWithoutSongsInput", {
  isAbstract: true
})
export class TagUpsertWithoutSongsInput {
  @TypeGraphQL.Field(_type => TagUpdateWithoutSongsInput, {
    nullable: false
  })
  update!: TagUpdateWithoutSongsInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutSongsInput, {
    nullable: false
  })
  create!: TagCreateWithoutSongsInput;
}
