import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutTagsInput } from "../inputs/SongCreateWithoutTagsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateOrConnectWithoutTagsInput", {
  isAbstract: true
})
export class SongCreateOrConnectWithoutTagsInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutTagsInput, {
    nullable: false
  })
  create!: SongCreateWithoutTagsInput;
}
