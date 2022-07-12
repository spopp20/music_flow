import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongCreateManySongsInputEnvelope } from "../inputs/InstrumentSongCreateManySongsInputEnvelope";
import { InstrumentSongCreateOrConnectWithoutSongsInput } from "../inputs/InstrumentSongCreateOrConnectWithoutSongsInput";
import { InstrumentSongCreateWithoutSongsInput } from "../inputs/InstrumentSongCreateWithoutSongsInput";
import { InstrumentSongWhereUniqueInput } from "../inputs/InstrumentSongWhereUniqueInput";

@TypeGraphQL.InputType("InstrumentSongCreateNestedManyWithoutSongsInput", {
  isAbstract: true
})
export class InstrumentSongCreateNestedManyWithoutSongsInput {
  @TypeGraphQL.Field(_type => [InstrumentSongCreateWithoutSongsInput], {
    nullable: true
  })
  create?: InstrumentSongCreateWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongCreateOrConnectWithoutSongsInput], {
    nullable: true
  })
  connectOrCreate?: InstrumentSongCreateOrConnectWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongCreateManySongsInputEnvelope, {
    nullable: true
  })
  createMany?: InstrumentSongCreateManySongsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongWhereUniqueInput], {
    nullable: true
  })
  connect?: InstrumentSongWhereUniqueInput[] | undefined;
}
