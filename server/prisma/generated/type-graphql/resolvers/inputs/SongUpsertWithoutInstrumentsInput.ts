import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutInstrumentsInput } from "../inputs/SongCreateWithoutInstrumentsInput";
import { SongUpdateWithoutInstrumentsInput } from "../inputs/SongUpdateWithoutInstrumentsInput";

@TypeGraphQL.InputType("SongUpsertWithoutInstrumentsInput", {
  isAbstract: true
})
export class SongUpsertWithoutInstrumentsInput {
  @TypeGraphQL.Field(_type => SongUpdateWithoutInstrumentsInput, {
    nullable: false
  })
  update!: SongUpdateWithoutInstrumentsInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutInstrumentsInput, {
    nullable: false
  })
  create!: SongCreateWithoutInstrumentsInput;
}
