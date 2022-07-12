import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongCreateManyInstrumentsInputEnvelope } from "../inputs/InstrumentSongCreateManyInstrumentsInputEnvelope";
import { InstrumentSongCreateOrConnectWithoutInstrumentsInput } from "../inputs/InstrumentSongCreateOrConnectWithoutInstrumentsInput";
import { InstrumentSongCreateWithoutInstrumentsInput } from "../inputs/InstrumentSongCreateWithoutInstrumentsInput";
import { InstrumentSongWhereUniqueInput } from "../inputs/InstrumentSongWhereUniqueInput";

@TypeGraphQL.InputType("InstrumentSongCreateNestedManyWithoutInstrumentsInput", {
  isAbstract: true
})
export class InstrumentSongCreateNestedManyWithoutInstrumentsInput {
  @TypeGraphQL.Field(_type => [InstrumentSongCreateWithoutInstrumentsInput], {
    nullable: true
  })
  create?: InstrumentSongCreateWithoutInstrumentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongCreateOrConnectWithoutInstrumentsInput], {
    nullable: true
  })
  connectOrCreate?: InstrumentSongCreateOrConnectWithoutInstrumentsInput[] | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongCreateManyInstrumentsInputEnvelope, {
    nullable: true
  })
  createMany?: InstrumentSongCreateManyInstrumentsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongWhereUniqueInput], {
    nullable: true
  })
  connect?: InstrumentSongWhereUniqueInput[] | undefined;
}
