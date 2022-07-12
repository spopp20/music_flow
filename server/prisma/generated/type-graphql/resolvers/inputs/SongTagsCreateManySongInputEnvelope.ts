import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsCreateManySongInput } from "../inputs/SongTagsCreateManySongInput";

@TypeGraphQL.InputType("SongTagsCreateManySongInputEnvelope", {
  isAbstract: true
})
export class SongTagsCreateManySongInputEnvelope {
  @TypeGraphQL.Field(_type => [SongTagsCreateManySongInput], {
    nullable: false
  })
  data!: SongTagsCreateManySongInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
