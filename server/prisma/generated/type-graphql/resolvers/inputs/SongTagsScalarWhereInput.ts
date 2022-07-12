import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("SongTagsScalarWhereInput", {
  isAbstract: true
})
export class SongTagsScalarWhereInput {
  @TypeGraphQL.Field(_type => [SongTagsScalarWhereInput], {
    nullable: true
  })
  AND?: SongTagsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsScalarWhereInput], {
    nullable: true
  })
  OR?: SongTagsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsScalarWhereInput], {
    nullable: true
  })
  NOT?: SongTagsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  songId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  tagId?: IntNullableFilter | undefined;
}
