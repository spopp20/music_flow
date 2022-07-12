import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsCreateNestedManyWithoutTagInput } from "../inputs/SongTagsCreateNestedManyWithoutTagInput";

@TypeGraphQL.InputType("TagCreateInput", {
  isAbstract: true
})
export class TagCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => SongTagsCreateNestedManyWithoutTagInput, {
    nullable: true
  })
  songs?: SongTagsCreateNestedManyWithoutTagInput | undefined;
}
