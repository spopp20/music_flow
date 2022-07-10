import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongCreateNestedManyWithoutInstrumentsInput } from "../inputs/InstrumentSongCreateNestedManyWithoutInstrumentsInput";

@TypeGraphQL.InputType("InstrumentCreateInput", {
  isAbstract: true
})
export class InstrumentCreateInput {
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
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongCreateNestedManyWithoutInstrumentsInput, {
    nullable: true
  })
  songs?: InstrumentSongCreateNestedManyWithoutInstrumentsInput | undefined;
}
