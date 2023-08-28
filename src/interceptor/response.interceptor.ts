import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Response } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

export interface Response<T> {
    data: T;
}

@Injectable()
export class TransformResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
        const { query, method, params, user } = context.switchToHttp().getRequest();
console.log({query})

        let meta={};  

            if (query && query.page) { 
                meta['page'] = Number(query.page);
                meta['recordsPerPage'] = Number(query.take);
                meta['previous'] = meta['page'] > 1 ? meta['page'] - 1 : null
            }

        return next.handle().pipe(map((responseData) => {
            console.log(responseData)
        return responseData;
        })
        )
    }
}