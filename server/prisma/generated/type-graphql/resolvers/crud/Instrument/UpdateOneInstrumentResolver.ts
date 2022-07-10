import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneInstrumentArgs } from "./args/UpdateOneInstrumentArgs";
import { Instrument } from "../../../models/Instrument";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Instrument)
export class UpdateOneInstrumentResolver {
  @TypeGraphQL.Mutation(_returns => Instrument, {
    nullable: true
  })
  async updateOneInstrument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneInstrumentArgs): Promise<Instrument | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).instrument.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
