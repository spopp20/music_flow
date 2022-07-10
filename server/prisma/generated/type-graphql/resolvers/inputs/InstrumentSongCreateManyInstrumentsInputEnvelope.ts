import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongCreateManyInstrumentsInput } from "../inputs/InstrumentSongCreateManyInstrumentsInput";

@TypeGraphQL.InputType("InstrumentSongCreateManyInstrumentsInputEnvelope", {
  isAbstract: true
})
export class InstrumentSongCreateManyInstrumentsInputEnvelope {
  @TypeGraphQL.Field(_type => [InstrumentSongCreateManyInstrumentsInput], {
    nullable: false
  })
  data!: InstrumentSongCreateManyInstrumentsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
