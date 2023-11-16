import { BaseRepository } from './base.repository';
import { IUbitsFilter, IUbitsFilterArgs } from '../../utils/filter';
export declare class MemoryRepository<T> implements BaseRepository<T, string> {
    items: Map<any, any>;
    constructor(items: T[]);
    getById(id: string): Promise<T>;
    create(entity: T): Promise<T>;
    update(id: string, value: T): Promise<T>;
    deleteById(id: string): Promise<void>;
    count(filter?: IUbitsFilter): Promise<number>;
    search(filter?: IUbitsFilter): Promise<T[]>;
    protected getArgsFilterSearch(filter: IUbitsFilter): IUbitsFilterArgs;
    inputFormat(data: any): T;
    outputFormat(data: any): any;
    sliceData(filter: IUbitsFilter, data: any): any[];
}
