import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsScalarWhereInput } from "../inputs/SongTagsScalarWhereInput";
import { SongTagsUpdateManyMutationInput } from "../inputs/SongTagsUpdateManyMutationInput";

@TypeGraphQL.InputType("SongTagsUpdateManyWithWhereWithoutTagInput", {
  isAbstract: true
})
export class SongTagsUpdateManyWithWhereWithoutTagInput {
  @TypeGraphQL.Field(_type => SongTagsScalarWhereInput, {
    nullable: false
  })
  where!: SongTagsScalarWhereInput;

  @TypeGraphQL.Field(_type => SongTagsUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongTagsUpdateManyMutationInput;
}
