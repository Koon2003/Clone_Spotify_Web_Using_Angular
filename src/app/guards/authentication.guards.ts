import { Injectable } from "@angular/core";
import { CanLoad, Route,  Router,  UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SpotifyService } from "../services/spotify.service";

@Injectable({
    providedIn: "root"
})

export class AuthenticationGuard implements CanLoad {
    constructor(
        private router: Router,
        private spotifyService: SpotifyService
    ) {}

    canLoad(
        route: Route,
        segments: UrlSegment[]
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const token = localStorage.getItem("token");
        if(!token) {
            return this.noAuthentication();
        }

        return new Promise(async (resolve) => {
            const user = await this.spotifyService.initializeUser();
            if(!user) {
                resolve(this.noAuthentication());
            } else {
                resolve(true);
            }
        });
    }

    noAuthentication() {
        localStorage.clear();
        this.router.navigate(["/login"]);
        return false;
    }
}