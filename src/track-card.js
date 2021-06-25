import {Component} from "doz";

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
            </style>
            <div class="track-card-container">
                <img class="track-image" src="${this.props.artworkUrl}">
                <div class="track-info">
                    <div title="${this.props.artistName}" class="track-artist">${this.props.artistName}</div>
                    <div title="${this.props.trackName}" class="track-title">${this.props.trackName}</div>
                </div>
            </div>
        `;
    }
}