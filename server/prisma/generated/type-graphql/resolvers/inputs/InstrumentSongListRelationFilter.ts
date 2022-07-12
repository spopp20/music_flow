import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongWhereInput } from "../inputs/InstrumentSongWhereInput";

@TypeGraphQL.InputType("InstrumentSongListRelationFilter", {
  isAbstract: true
})
export class InstrumentSongListRelationFilter {
  @TypeGraphQL.Field(_type => InstrumentSongWhereInput, {
    nullable: true
  })
  every?: InstrumentSongWhereInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongWhereInput, {
    nullable: true
  })
  some?: InstrumentSongWhereInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongWhereInput, {
    nullable: true
  })
  none?: InstrumentSongWhereInput | undefined;
}
