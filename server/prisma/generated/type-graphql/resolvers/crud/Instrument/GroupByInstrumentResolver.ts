import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByInstrumentArgs } from "./args/GroupByInstrumentArgs";
import { Instrument } from "../../../models/Instrument";
import { InstrumentGroupBy } from "../../outputs/InstrumentGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Instrument)
export class GroupByInstrumentResolver {
  @TypeGraphQL.Query(_returns => [InstrumentGroupBy], {
    nullable: false
  })
  async groupByInstrument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByInstrumentArgs): Promise<InstrumentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).instrument.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
