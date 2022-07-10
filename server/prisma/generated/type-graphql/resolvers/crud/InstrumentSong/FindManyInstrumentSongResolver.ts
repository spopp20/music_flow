import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyInstrumentSongArgs } from "./args/FindManyInstrumentSongArgs";
import { InstrumentSong } from "../../../models/InstrumentSong";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => InstrumentSong)
export class FindManyInstrumentSongResolver {
  @TypeGraphQL.Query(_returns => [InstrumentSong], {
    nullable: false
  })
  async instrumentSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyInstrumentSongArgs): Promise<InstrumentSong[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).instrumentSong.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
