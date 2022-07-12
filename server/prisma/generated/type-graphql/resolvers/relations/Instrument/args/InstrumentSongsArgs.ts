import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentSongOrderByWithRelationInput } from "../../../inputs/InstrumentSongOrderByWithRelationInput";
import { InstrumentSongWhereInput } from "../../../inputs/InstrumentSongWhereInput";
import { InstrumentSongWhereUniqueInput } from "../../../inputs/InstrumentSongWhereUniqueInput";
import { InstrumentSongScalarFieldEnum } from "../../../../enums/InstrumentSongScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class InstrumentSongsArgs {
  @TypeGraphQL.Field(_type => InstrumentSongWhereInput, {
    nullable: true
  })
  where?: InstrumentSongWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: InstrumentSongOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongWhereUniqueInput, {
    nullable: true
  })
  cursor?: InstrumentSongWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "notes" | "words" | "mimeType" | "file" | "createdAt" | "updatedAt" | "instrumentId" | "songId"> | undefined;
}
