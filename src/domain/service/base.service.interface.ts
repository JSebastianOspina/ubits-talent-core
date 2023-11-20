import { IUbitsFilter } from "../../utils/filter";


// Interfaz que representa objetos con una propiedad 'id'
interface HasId {
    id: string | number;
}

export interface IBaseService<T extends HasId> {
    findAll(): Promise<T[]>
    create(...args: any[]): Promise<T>;
    getById(id: T['id']): Promise<T>; // Se quitó el Promise<T | undefined>

    search(options?: IUbitsFilter): Promise<T[]>;
    update(id: T['id'], entityToUpdate: Partial<T>): Promise<T>; // Se quitó el Promise<T | undefined>

    deleteById(id: T['id']): Promise<void>;
}