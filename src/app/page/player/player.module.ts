import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlayerComponent } from "./player.component";
import { RouterModule } from "@angular/router";
import { PlayerRoutes } from "./player.routes";
import { LeftPanelComponent } from "../../components/left-panel/left-panel.component";
import { ButtonMenuComponent } from "../../components/button-menu/button-menu.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserFooterComponent } from "../../components/user-footer/user-footer.component";
import { HomeComponent } from "../home/home.component";
import { TopArtistComponent } from "../../components/top-artist/top-artist.component";
import { RightPanelComponent } from "../../components/right-panel/right-panel.component";
import { RecentSearchesComponent } from "../../components/recent-searches/recent-searches.component";
import { FormsModule } from "@angular/forms";
import { TopArtistsComponent } from "../../components/top-artists/top-artists.component";
import { ArtistItemImageComponent } from "../../components/artist-item-image/artist-item-image.component";
import { PlayerCardComponent } from "../../components/player-card/player-card.component";

@NgModule({
    declarations: [
        PlayerComponent,
        LeftPanelComponent,
        ButtonMenuComponent,
        UserFooterComponent,
        HomeComponent,
        TopArtistComponent,
        RightPanelComponent,
        RecentSearchesComponent,
        TopArtistsComponent,
        ArtistItemImageComponent,
        PlayerCardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        RouterModule.forChild(PlayerRoutes)
    ],
})

export class PlayerModule { }
