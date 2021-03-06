import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { InstrumentSongListRelationFilter } from "../inputs/InstrumentSongListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("InstrumentWhereInput", {
  isAbstract: true
})
export class InstrumentWhereInput {
  @TypeGraphQL.Field(_type => [InstrumentWhereInput], {
    nullable: true
  })
  AND?: InstrumentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentWhereInput], {
    nullable: true
  })
  OR?: InstrumentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentWhereInput], {
    nullable: true
  })
  NOT?: InstrumentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  active?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongListRelationFilter, {
    nullable: true
  })
  songs?: InstrumentSongListRelationFilter | undefined;
}
