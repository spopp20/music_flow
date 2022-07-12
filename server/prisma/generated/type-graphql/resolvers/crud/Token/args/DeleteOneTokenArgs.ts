import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokenWhereUniqueInput } from "../../../inputs/TokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneTokenArgs {
  @TypeGraphQL.Field(_type => TokenWhereUniqueInput, {
    nullable: false
  })
  where!: TokenWhereUniqueInput;
}
