import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentOrderByWithRelationInput } from "../../../inputs/InstrumentOrderByWithRelationInput";
import { InstrumentWhereInput } from "../../../inputs/InstrumentWhereInput";
import { InstrumentWhereUniqueInput } from "../../../inputs/InstrumentWhereUniqueInput";
import { InstrumentScalarFieldEnum } from "../../../../enums/InstrumentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyInstrumentArgs {
  @TypeGraphQL.Field(_type => InstrumentWhereInput, {
    nullable: true
  })
  where?: InstrumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InstrumentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: InstrumentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => InstrumentWhereUniqueInput, {
    nullable: true
  })
  cursor?: InstrumentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [InstrumentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "active" | "description" | "createdAt" | "updatedAt"> | undefined;
}
