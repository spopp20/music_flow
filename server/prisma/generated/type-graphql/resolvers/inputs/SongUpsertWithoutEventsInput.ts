import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutEventsInput } from "../inputs/SongCreateWithoutEventsInput";
import { SongUpdateWithoutEventsInput } from "../inputs/SongUpdateWithoutEventsInput";

@TypeGraphQL.InputType("SongUpsertWithoutEventsInput", {
  isAbstract: true
})
export class SongUpsertWithoutEventsInput {
  @TypeGraphQL.Field(_type => SongUpdateWithoutEventsInput, {
    nullable: false
  })
  update!: SongUpdateWithoutEventsInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutEventsInput, {
    nullable: false
  })
  create!: SongCreateWithoutEventsInput;
}
