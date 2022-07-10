import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokenCreateInput } from "../../../inputs/TokenCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTokenArgs {
  @TypeGraphQL.Field(_type => TokenCreateInput, {
    nullable: false
  })
  data!: TokenCreateInput;
}
