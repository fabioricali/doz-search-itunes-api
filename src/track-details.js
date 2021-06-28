import {Component} from "doz";

export default class TrackDetails extends Component {
    template(h) {
        //language=html
        return h`
            <style>
                :component {
                    padding: 24px;
                    display: block;
                    overflow: auto;
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10000;
                    background: rgba(0,0,0,.95);
                    color: #fff;
                    text-align: left;
                }
                
                .track-info {
                    text-align: left;
                    width: 100%;
                }
                
                td, th {
                    padding: 8px;
                }
                
                th {
                    width: 20%;
                }
                
                td {
                    width: 80%;
                }
                
                input[type=text] {
                    width: 100%;
                    padding: 4px;
                }
            </style>
            <div class="track-details-container">
                <div style="text-align: right">
                    <button onclick="${() => this.parent.destroy()}">Close</button>
                </div>
                <h3>Details:</h3>
                <img src="${this.props.artworkSmall}" style="width: 150px; height: 150px; display: block; margin-bottom: 24px; border: 1px solid #ccc">
                <table class="track-info">
                    <tr>
                        <th>Artist:</th>
                        <td><input type="text" value="${this.props.artistName}" readOnly="true" onclick="$this.select()"></td>
                    </tr>
                    <tr>
                        <th>Title:</th>
                        <td><input type="text" value="${this.props.trackName}" readOnly="true" onclick="$this.select()"></td>
                    </tr>
                    <tr>
                        <th>Album:</th>
                        <td><input type="text" value="${this.props.album}" readOnly="true" onclick="$this.select()"></td>
                    </tr>
                    <tr>
                        <th>Genre:</th>
                        <td><input type="text" value="${this.props.genre}" readOnly="true" onclick="$this.select()"></td>
                    </tr>
                    <tr>
                        <th>Release Date:</th>
                        <td><input type="text" value="${this.props.releaseDate}" readOnly="true" onclick="$this.select()"></td>
                    </tr>
                    <tr>
                        <th>Preview:</th>
                        <td>
                            <audio src="${this.props.previewUrl}" controls></audio>
                            <div><input type="text" value="${this.props.previewUrl}" readOnly="true" onclick="$this.select()"></div>
                        </td>
                    </tr>
                    <tr>
                        <th>Artwork Small (300x300):</th>
                        <td>
                            <input type="text" value="${this.props.artworkSmall}" readOnly="true" onclick="$this.select()">
                        </td>
                    </tr>
                    <tr>
                        <th>Artwork Medium (600x600):</th>
                        <td><input type="text" value="${this.props.artworkMedium}" readOnly="true" onclick="$this.select()"></td>
                    </tr>
                    <tr>
                        <th>Artwork Large (1000x1000):</th>
                        <td><input type="text" value="${this.props.artworkLarge}" readOnly="true" onclick="$this.select()"></td>
                    </tr>
                </table>
            </div>
        `;
    }
}