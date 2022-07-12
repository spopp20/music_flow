import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentCreateOrConnectWithoutSongsInput } from "../inputs/InstrumentCreateOrConnectWithoutSongsInput";
import { InstrumentCreateWithoutSongsInput } from "../inputs/InstrumentCreateWithoutSongsInput";
import { InstrumentUpdateWithoutSongsInput } from "../inputs/InstrumentUpdateWithoutSongsInput";
import { InstrumentUpsertWithoutSongsInput } from "../inputs/InstrumentUpsertWithoutSongsInput";
import { InstrumentWhereUniqueInput } from "../inputs/InstrumentWhereUniqueInput";

@TypeGraphQL.InputType("InstrumentUpdateOneWithoutSongsNestedInput", {
  isAbstract: true
})
export class InstrumentUpdateOneWithoutSongsNestedInput {
  @TypeGraphQL.Field(_type => InstrumentCreateWithoutSongsInput, {
    nullable: true
  })
  create?: InstrumentCreateWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentCreateOrConnectWithoutSongsInput, {
    nullable: true
  })
  connectOrCreate?: InstrumentCreateOrConnectWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentUpsertWithoutSongsInput, {
    nullable: true
  })
  upsert?: InstrumentUpsertWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => InstrumentWhereUniqueInput, {
    nullable: true
  })
  connect?: InstrumentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentUpdateWithoutSongsInput, {
    nullable: true
  })
  update?: InstrumentUpdateWithoutSongsInput | undefined;
}
