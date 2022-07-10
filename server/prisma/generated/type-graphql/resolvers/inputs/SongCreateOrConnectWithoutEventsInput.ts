import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutEventsInput } from "../inputs/SongCreateWithoutEventsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateOrConnectWithoutEventsInput", {
  isAbstract: true
})
export class SongCreateOrConnectWithoutEventsInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutEventsInput, {
    nullable: false
  })
  create!: SongCreateWithoutEventsInput;
}
