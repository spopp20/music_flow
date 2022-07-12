import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentCreateWithoutSongsInput } from "../inputs/InstrumentCreateWithoutSongsInput";
import { InstrumentUpdateWithoutSongsInput } from "../inputs/InstrumentUpdateWithoutSongsInput";

@TypeGraphQL.InputType("InstrumentUpsertWithoutSongsInput", {
  isAbstract: true
})
export class InstrumentUpsertWithoutSongsInput {
  @TypeGraphQL.Field(_type => InstrumentUpdateWithoutSongsInput, {
    nullable: false
  })
  update!: InstrumentUpdateWithoutSongsInput;

  @TypeGraphQL.Field(_type => InstrumentCreateWithoutSongsInput, {
    nullable: false
  })
  create!: InstrumentCreateWithoutSongsInput;
}
