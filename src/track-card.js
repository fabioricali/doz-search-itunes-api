import {Component} from "doz";
import TrackDetails from "./track-details";

export default class TrackCard extends Component{
    template(h) {
        //language=html
        return h`
            <style>
                .track-card-container {
                    padding: 24px;
                    background: #ccc;
                    border-radius: 4px;
                    /*height: 246px;*/
                    overflow: hidden;
                    cursor: pointer;
                }
                
                .track-card-container:hover {
                    background: #ddd;
                }
                
                .track-image {
                    width: 150px;
                    height: 150px;
                    margin-bottom: 16px;
                    border-radius: 4px;
                }
                
                .track-info {
                    font-size: 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                
                .track-artist {
                    font-weight: bolder;
                }
            </style>
            <div class="track-card-container" onclick="${this.viewDetails}">
                <img class="track-image" src="${this.props.artworkSmall}">
                <div class="track-info">
                    <div title="${this.props.artistName}" class="track-artist">${this.props.artistName}</div>
                    <div title="${this.props.trackName}" class="track-title">${this.props.trackName}</div>
                </div>
            </div>
        `;
    }

    viewDetails() {
        this.app.mount(this.h`
            <${TrackDetails}
                artistName="${this.props.artistName}"
                trackName="${this.props.trackName}"
                album="${this.props.album}"
                genre="${this.props.genre}"
                releaseDate="${this.props.releaseDate}"
                previewUrl="${this.props.previewUrl}"
                artworkSmall="${this.props.artworkSmall}"
                artworkMedium="${this.props.artworkMedium}"
                artworkLarge="${this.props.artworkLarge}"
            />
        `)
    }
}