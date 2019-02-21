import {Author} from './Author';
import {Affiliation} from './Affiliation';

export class Paper{
    public id: number ;
    public title:String ;
    public authors : Array<Author>  = null;
    public affiliations : Array<Affiliation> = null;


}