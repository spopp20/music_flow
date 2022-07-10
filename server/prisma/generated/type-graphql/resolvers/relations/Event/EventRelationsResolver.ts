import * as TypeGraphQL from "type-graphql";
import { Event } from "../../../models/Event";
import { EventSong } from "../../../models/EventSong";
import { EventSongsArgs } from "./args/EventSongsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Event)
export class EventRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [EventSong], {
    nullable: false
  })
  async songs(@TypeGraphQL.Root() event: Event, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: EventSongsArgs): Promise<EventSong[]> {
    return getPrismaFromContext(ctx).event.findUnique({
      where: {
        id: event.id,
      },
    }).songs(args);
  }
}
