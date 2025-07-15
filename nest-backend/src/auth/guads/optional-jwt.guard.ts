import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

// 未ログイン時にはnull、ログイン時にはuser情報を返す処理
@Injectable()
export class OptionalJwtAuthGuard extends AuthGuard('jwt') {
    handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
        return user || null;
    }

    // canActivate を override して、常に true を返す
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        try {
            const result = super.canActivate(context);

            if (result instanceof Promise) {
                return result.catch(() => true); // Promise が reject されてもtrueを返す
            }

            return true;
        } catch (error) {
            return true;
        }
    }
}