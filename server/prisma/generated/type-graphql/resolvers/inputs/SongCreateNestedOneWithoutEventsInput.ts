import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutEventsInput } from "../inputs/SongCreateOrConnectWithoutEventsInput";
import { SongCreateWithoutEventsInput } from "../inputs/SongCreateWithoutEventsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateNestedOneWithoutEventsInput", {
  isAbstract: true
})
export class SongCreateNestedOneWithoutEventsInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutEventsInput, {
    nullable: true
  })
  create?: SongCreateWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutEventsInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;
}
