import * as TypeGraphQL from "type-graphql";
import { Event } from "../../../models/Event";
import { EventSong } from "../../../models/EventSong";
import { Song } from "../../../models/Song";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EventSong)
export class EventSongRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Event, {
    nullable: true
  })
  async event(@TypeGraphQL.Root() eventSong: EventSong, @TypeGraphQL.Ctx() ctx: any): Promise<Event | null> {
    return getPrismaFromContext(ctx).eventSong.findUnique({
      where: {
        id: eventSong.id,
      },
    }).event({});
  }

  @TypeGraphQL.FieldResolver(_type => Song, {
    nullable: true
  })
  async song(@TypeGraphQL.Root() eventSong: EventSong, @TypeGraphQL.Ctx() ctx: any): Promise<Song | null> {
    return getPrismaFromContext(ctx).eventSong.findUnique({
      where: {
        id: eventSong.id,
      },
    }).song({});
  }
}
