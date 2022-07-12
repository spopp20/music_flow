import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Instrument } from "../models/Instrument";
import { Song } from "../models/Song";

@TypeGraphQL.ObjectType("InstrumentSong", {
  isAbstract: true
})
export class InstrumentSong {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  words?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mimeType?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  file?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  instruments?: Instrument | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  instrumentId?: number | null;

  songs?: Song | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  songId?: number | null;
}
