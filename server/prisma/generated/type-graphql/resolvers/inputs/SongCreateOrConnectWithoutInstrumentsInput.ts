import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutInstrumentsInput } from "../inputs/SongCreateWithoutInstrumentsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateOrConnectWithoutInstrumentsInput", {
  isAbstract: true
})
export class SongCreateOrConnectWithoutInstrumentsInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutInstrumentsInput, {
    nullable: false
  })
  create!: SongCreateWithoutInstrumentsInput;
}
