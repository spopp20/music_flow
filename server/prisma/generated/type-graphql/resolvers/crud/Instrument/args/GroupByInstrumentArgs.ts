import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InstrumentOrderByWithAggregationInput } from "../../../inputs/InstrumentOrderByWithAggregationInput";
import { InstrumentScalarWhereWithAggregatesInput } from "../../../inputs/InstrumentScalarWhereWithAggregatesInput";
import { InstrumentWhereInput } from "../../../inputs/InstrumentWhereInput";
import { InstrumentScalarFieldEnum } from "../../../../enums/InstrumentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByInstrumentArgs {
  @TypeGraphQL.Field(_type => InstrumentWhereInput, {
    nullable: true
  })
  where?: InstrumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InstrumentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: InstrumentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "active" | "description" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => InstrumentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: InstrumentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
