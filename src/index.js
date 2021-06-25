import {Component} from "doz";
import DozSearchfield from 'doz-searchfield';
import axios from "axios";
import TrackCard from "./track-card";

DozSearchfield.tag = 'search-field';

export default class extends Component{

    constructor(o) {
        super(o);

        this.props = {
            records: [],
            searchMediaType: 'music', //movie, podcast, music, musicVideo, audiobook, shortFilm, tvShow, software, ebook, all,
            searchLimit: 100,
        }
    }

    template(h) {
        
        //language=HTML
        return h`
            <style> 
                * {
                    box-sizing: border-box;
                }
                
                .search-container {
                }
                
                .search-results {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(198px, max-content));
                    /*grid-template-columns: repeat(auto-fill, minmax(182px, max-content));*/
                    gap: 16px;
                    overflow: auto;
                    /*height: 92vh;*/
                }
                
                .search-field input{
                    padding: 8px;
                    width: 100%;
                    font-size: 16px;
                    margin-bottom: 24px;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                }
            </style>
            <div class="search-container">
                <${DozSearchfield} placeholder="Search on Itunes" class="search-field" d:on-search="${this.search}" d:on-clear="${this.clearSearch}"/>
                <div class="search-results">
                    ${this.props.records.map(item => 
                            //language=html
                            h`
                                <${TrackCard} 
                                    artistName="${item.artistName}"
                                    trackName="${item.trackName}"
                                    artworkUrl="${item.artworkUrl100.replace('100x100', '300x300')}"
                                />
                            `
                    )}
                </div>
            </div>
        `
    }

    search(value) {
        let url = `https://itunes.apple.com/search?limit=${this.props.searchLimit}&media=${this.props.searchMediaType}&term=${value.split(' ').join('+')}`
        axios.get(url)
            .then(response => {
                this.props.records = response.data.results;
                console.log(this.props.records)
            })
            .catch(e => {
                console.error(e)
            })
    }

    clearSearch() {
        this.props.records = []
    }

};
