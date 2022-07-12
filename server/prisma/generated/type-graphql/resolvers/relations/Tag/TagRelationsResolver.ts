import * as TypeGraphQL from "type-graphql";
import { SongTags } from "../../../models/SongTags";
import { Tag } from "../../../models/Tag";
import { TagSongsArgs } from "./args/TagSongsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tag)
export class TagRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [SongTags], {
    nullable: false
  })
  async songs(@TypeGraphQL.Root() tag: Tag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TagSongsArgs): Promise<SongTags[]> {
    return getPrismaFromContext(ctx).tag.findUnique({
      where: {
        id: tag.id,
      },
    }).songs(args);
  }
}
