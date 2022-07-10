import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutInstrumentsInput } from "../inputs/SongCreateOrConnectWithoutInstrumentsInput";
import { SongCreateWithoutInstrumentsInput } from "../inputs/SongCreateWithoutInstrumentsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateNestedOneWithoutInstrumentsInput", {
  isAbstract: true
})
export class SongCreateNestedOneWithoutInstrumentsInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutInstrumentsInput, {
    nullable: true
  })
  create?: SongCreateWithoutInstrumentsInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutInstrumentsInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutInstrumentsInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;
}
