import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongCreateWithoutSongsInput } from "../inputs/InstrumentSongCreateWithoutSongsInput";
import { InstrumentSongWhereUniqueInput } from "../inputs/InstrumentSongWhereUniqueInput";

@TypeGraphQL.InputType("InstrumentSongCreateOrConnectWithoutSongsInput", {
  isAbstract: true
})
export class InstrumentSongCreateOrConnectWithoutSongsInput {
  @TypeGraphQL.Field(_type => InstrumentSongWhereUniqueInput, {
    nullable: false
  })
  where!: InstrumentSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => InstrumentSongCreateWithoutSongsInput, {
    nullable: false
  })
  create!: InstrumentSongCreateWithoutSongsInput;
}
