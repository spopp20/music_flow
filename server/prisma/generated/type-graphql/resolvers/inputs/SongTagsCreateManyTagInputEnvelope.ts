import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsCreateManyTagInput } from "../inputs/SongTagsCreateManyTagInput";

@TypeGraphQL.InputType("SongTagsCreateManyTagInputEnvelope", {
  isAbstract: true
})
export class SongTagsCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [SongTagsCreateManyTagInput], {
    nullable: false
  })
  data!: SongTagsCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
