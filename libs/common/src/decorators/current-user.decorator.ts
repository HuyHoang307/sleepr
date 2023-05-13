import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserDocument } from '../../../../apps/auth/src/users/models/user.schema';

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);

function getCurrentUserByContext(context: ExecutionContext): UserDocument {
  return context.switchToHttp().getRequest().user;
}
