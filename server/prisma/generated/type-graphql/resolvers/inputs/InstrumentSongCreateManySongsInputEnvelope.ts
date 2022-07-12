import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongCreateManySongsInput } from "../inputs/InstrumentSongCreateManySongsInput";

@TypeGraphQL.InputType("InstrumentSongCreateManySongsInputEnvelope", {
  isAbstract: true
})
export class InstrumentSongCreateManySongsInputEnvelope {
  @TypeGraphQL.Field(_type => [InstrumentSongCreateManySongsInput], {
    nullable: false
  })
  data!: InstrumentSongCreateManySongsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
