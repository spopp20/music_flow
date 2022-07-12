import * as TypeGraphQL from "type-graphql";
import { Song } from "../../../models/Song";
import { SongTags } from "../../../models/SongTags";
import { Tag } from "../../../models/Tag";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongTags)
export class SongTagsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Song, {
    nullable: true
  })
  async song(@TypeGraphQL.Root() songTags: SongTags, @TypeGraphQL.Ctx() ctx: any): Promise<Song | null> {
    return getPrismaFromContext(ctx).songTags.findUnique({
      where: {
        id: songTags.id,
      },
    }).song({});
  }

  @TypeGraphQL.FieldResolver(_type => Tag, {
    nullable: true
  })
  async tag(@TypeGraphQL.Root() songTags: SongTags, @TypeGraphQL.Ctx() ctx: any): Promise<Tag | null> {
    return getPrismaFromContext(ctx).songTags.findUnique({
      where: {
        id: songTags.id,
      },
    }).tag({});
  }
}
