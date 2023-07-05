import { IsString } from "class-validator";

export default class LoginDTO{
    @IsString()
    private name : string;

    @IsString()
    private password : string;

    @IsString()
    private email : string;

    @IsString()
    private role : string;



}