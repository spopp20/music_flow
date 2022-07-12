import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByInstrumentSongArgs } from "./args/GroupByInstrumentSongArgs";
import { InstrumentSong } from "../../../models/InstrumentSong";
import { InstrumentSongGroupBy } from "../../outputs/InstrumentSongGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => InstrumentSong)
export class GroupByInstrumentSongResolver {
  @TypeGraphQL.Query(_returns => [InstrumentSongGroupBy], {
    nullable: false
  })
  async groupByInstrumentSong(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByInstrumentSongArgs): Promise<InstrumentSongGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).instrumentSong.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
