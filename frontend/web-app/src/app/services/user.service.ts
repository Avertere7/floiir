import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserHttpService } from './http/user.http.service';
import { User } from '../models/user.model';

export enum RegisterResponse {
    Success,
    FormInvalid,
    InvalidKey,
    KeyNotFound,
    KeyWasUsed,
    LoginIsUsed,
    EmailIsUsed,
    UnknownHttpError,
    UnknownError
}

type SaveAuthTokenDelegate = (token: string) => void;

@Injectable()
export class UserService extends UserHttpService {

    constructor(http: HttpClient) {
        super(http);
    }

    /** Register user in floiir. If register is successfull JWT token is saved in local storage */
    public async register(key: string, user: User, saveToken: SaveAuthTokenDelegate): Promise<RegisterResponse> {
        return new Promise<RegisterResponse>(async (res) => {
            try {
                const response = await this.post(key, user);
                saveToken(response.jwt);
                res(RegisterResponse.Success);
            } catch (err) {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 460) res(RegisterResponse.InvalidKey);
                    else if (err.status === 461) res(RegisterResponse.KeyNotFound);
                    else if (err.status === 462) res(RegisterResponse.KeyWasUsed);
                    else if (err.status === 463) res(RegisterResponse.FormInvalid);
                    else if (err.status === 464) res(RegisterResponse.EmailIsUsed);
                    else if (err.status === 465) res(RegisterResponse.LoginIsUsed);
                    else res(RegisterResponse.UnknownHttpError);
                } else res(RegisterResponse.UnknownError);
            }
        });
    }

}