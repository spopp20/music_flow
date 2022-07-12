import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutInstrumentsInput } from "../inputs/SongCreateOrConnectWithoutInstrumentsInput";
import { SongCreateWithoutInstrumentsInput } from "../inputs/SongCreateWithoutInstrumentsInput";
import { SongUpdateWithoutInstrumentsInput } from "../inputs/SongUpdateWithoutInstrumentsInput";
import { SongUpsertWithoutInstrumentsInput } from "../inputs/SongUpsertWithoutInstrumentsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateOneWithoutInstrumentsNestedInput", {
  isAbstract: true
})
export class SongUpdateOneWithoutInstrumentsNestedInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutInstrumentsInput, {
    nullable: true
  })
  create?: SongCreateWithoutInstrumentsInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutInstrumentsInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutInstrumentsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpsertWithoutInstrumentsInput, {
    nullable: true
  })
  upsert?: SongUpsertWithoutInstrumentsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateWithoutInstrumentsInput, {
    nullable: true
  })
  update?: SongUpdateWithoutInstrumentsInput | undefined;
}
