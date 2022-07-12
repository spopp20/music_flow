import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentCreateNestedOneWithoutSongsInput } from "../inputs/InstrumentCreateNestedOneWithoutSongsInput";

@TypeGraphQL.InputType("InstrumentSongCreateWithoutSongsInput", {
  isAbstract: true
})
export class InstrumentSongCreateWithoutSongsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  words?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mimeType?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  file?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => InstrumentCreateNestedOneWithoutSongsInput, {
    nullable: true
  })
  instruments?: InstrumentCreateNestedOneWithoutSongsInput | undefined;
}
