import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokenOrderByWithRelationInput } from "../../../inputs/TokenOrderByWithRelationInput";
import { TokenWhereInput } from "../../../inputs/TokenWhereInput";
import { TokenWhereUniqueInput } from "../../../inputs/TokenWhereUniqueInput";
import { TokenScalarFieldEnum } from "../../../../enums/TokenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTokenArgs {
  @TypeGraphQL.Field(_type => TokenWhereInput, {
    nullable: true
  })
  where?: TokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TokenOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TokenOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TokenWhereUniqueInput, {
    nullable: true
  })
  cursor?: TokenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TokenScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "hashedToken" | "type" | "expiresAt" | "sentTo" | "userId"> | undefined;
}
