import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EventSong } from "../models/EventSong";
import { InstrumentSong } from "../models/InstrumentSong";
import { SongTags } from "../models/SongTags";
import { SongCount } from "../resolvers/outputs/SongCount";

@TypeGraphQL.ObjectType("Song", {
  isAbstract: true
})
export class Song {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

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
  alias?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  startKey?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tempoCd!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  startWords?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  arrangement?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  tags?: SongTags[];

  events?: EventSong[];

  instruments?: InstrumentSong[];

  @TypeGraphQL.Field(_type => SongCount, {
    nullable: true
  })
  _count?: SongCount | null;
}
