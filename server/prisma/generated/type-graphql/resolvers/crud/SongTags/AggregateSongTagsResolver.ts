import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSongTagsArgs } from "./args/AggregateSongTagsArgs";
import { SongTags } from "../../../models/SongTags";
import { AggregateSongTags } from "../../outputs/AggregateSongTags";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongTags)
export class AggregateSongTagsResolver {
  @TypeGraphQL.Query(_returns => AggregateSongTags, {
    nullable: false
  })
  async aggregateSongTags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSongTagsArgs): Promise<AggregateSongTags> {
    return getPrismaFromContext(ctx).songTags.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
