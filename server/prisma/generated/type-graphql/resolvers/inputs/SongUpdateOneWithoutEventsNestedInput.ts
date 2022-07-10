import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutEventsInput } from "../inputs/SongCreateOrConnectWithoutEventsInput";
import { SongCreateWithoutEventsInput } from "../inputs/SongCreateWithoutEventsInput";
import { SongUpdateWithoutEventsInput } from "../inputs/SongUpdateWithoutEventsInput";
import { SongUpsertWithoutEventsInput } from "../inputs/SongUpsertWithoutEventsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateOneWithoutEventsNestedInput", {
  isAbstract: true
})
export class SongUpdateOneWithoutEventsNestedInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutEventsInput, {
    nullable: true
  })
  create?: SongCreateWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutEventsInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpsertWithoutEventsInput, {
    nullable: true
  })
  upsert?: SongUpsertWithoutEventsInput | undefined;

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

  @TypeGraphQL.Field(_type => SongUpdateWithoutEventsInput, {
    nullable: true
  })
  update?: SongUpdateWithoutEventsInput | undefined;
}
