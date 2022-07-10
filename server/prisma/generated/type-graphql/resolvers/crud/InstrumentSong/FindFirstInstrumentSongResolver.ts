import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstInstrumentSongArgs } from "./args/FindFirstInstrumentSongArgs";
import { InstrumentSong } from "../../../models/InstrumentSong";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => InstrumentSong)
export class FindFirstInstrumentSongResolver {
  @TypeGraphQL.Query(_returns => InstrumentSong, {
    nullable: true
  })
  async findFirstInstrumentSong(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstInstrumentSongArgs): Promise<InstrumentSong | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).instrumentSong.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
