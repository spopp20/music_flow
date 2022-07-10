import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongCreateNestedManyWithoutSongsInput } from "../inputs/InstrumentSongCreateNestedManyWithoutSongsInput";
import { SongTagsCreateNestedManyWithoutSongInput } from "../inputs/SongTagsCreateNestedManyWithoutSongInput";

@TypeGraphQL.InputType("SongCreateWithoutEventsInput", {
  isAbstract: true
})
export class SongCreateWithoutEventsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  active!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alias?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  startKey?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tempoCd!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  startWords?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  arrangement?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SongTagsCreateNestedManyWithoutSongInput, {
    nullable: true
  })
  tags?: SongTagsCreateNestedManyWithoutSongInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongCreateNestedManyWithoutSongsInput, {
    nullable: true
  })
  instruments?: InstrumentSongCreateNestedManyWithoutSongsInput | undefined;
}
