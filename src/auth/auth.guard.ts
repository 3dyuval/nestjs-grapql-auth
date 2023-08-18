import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GQLAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }

  getRequest(context) {
    const ctx = GqlExecutionContext.create(context);

    const request = ctx.getContext();
    request.body = ctx.getArgs('LoginUserInput');
    return request;
  }
}