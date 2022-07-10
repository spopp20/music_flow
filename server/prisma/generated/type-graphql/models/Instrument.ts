import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { InstrumentSong } from "../models/InstrumentSong";
import { InstrumentCount } from "../resolvers/outputs/InstrumentCount";

@TypeGraphQL.ObjectType("Instrument", {
  isAbstract: true
})
export class Instrument {
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  songs?: InstrumentSong[];

  @TypeGraphQL.Field(_type => InstrumentCount, {
    nullable: true
  })
  _count?: InstrumentCount | null;
}
