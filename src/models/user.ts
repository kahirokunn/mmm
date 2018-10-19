import * as Pring from 'pring';
const property = Pring.property;

export class User extends Pring.Base {
    @property public name?: string;
}
