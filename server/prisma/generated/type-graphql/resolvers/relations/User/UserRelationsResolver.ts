import * as TypeGraphQL from "type-graphql";
import { Profile } from "../../../models/Profile";
import { Session } from "../../../models/Session";
import { Token } from "../../../models/Token";
import { User } from "../../../models/User";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
import { UserTokensArgs } from "./args/UserTokensArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Profile, {
    nullable: true
  })
  async profile(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Profile | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).profile({});
  }

  @TypeGraphQL.FieldResolver(_type => [Session], {
    nullable: false
  })
  async sessions(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSessionsArgs): Promise<Session[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).sessions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Token], {
    nullable: false
  })
  async tokens(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTokensArgs): Promise<Token[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).tokens(args);
  }
}
