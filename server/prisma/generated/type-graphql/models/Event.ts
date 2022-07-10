import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EventSong } from "../models/EventSong";
import { EventCount } from "../resolvers/outputs/EventCount";

@TypeGraphQL.ObjectType("Event", {
  isAbstract: true
})
export class Event {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  active!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  venue?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  telephone?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDateTime?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  songs?: EventSong[];

  @TypeGraphQL.Field(_type => EventCount, {
    nullable: true
  })
  _count?: EventCount | null;
}
