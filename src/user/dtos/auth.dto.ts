import { IsString, IsNotEmpty, IsEmail,MinLength, Matches}  from 'class-validator'


export class SignupDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @Matches(/^\+?(\d{1,4})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})(?:\s?(ext|x|extension)\s?\d{1,5})?$/, { message: ' phone number is invalid'})
    phone: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(5)
    password: string;
}