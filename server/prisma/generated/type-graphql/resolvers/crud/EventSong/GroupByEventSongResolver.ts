import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByEventSongArgs } from "./args/GroupByEventSongArgs";
import { EventSong } from "../../../models/EventSong";
import { EventSongGroupBy } from "../../outputs/EventSongGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EventSong)
export class GroupByEventSongResolver {
  @TypeGraphQL.Query(_returns => [EventSongGroupBy], {
    nullable: false
  })
  async groupByEventSong(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEventSongArgs): Promise<EventSongGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).eventSong.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
