import {Component} from "doz";
import DozSearchfield from 'doz-searchfield';
import fetchJsonP from "fetch-jsonp";
import TrackCard from "./track-card";

DozSearchfield.tag = 'search-field';

export default class extends Component{

    constructor(o) {
        super(o);

        this.props = {
            records: [],
            searchMediaType: 'music', //movie, podcast, music, musicVideo, audiobook, shortFilm, tvShow, software, ebook, all,
            searchLimit: 100,
            _isLoading: false,
            _noResults: false
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
                <div d-show="${this.props._isLoading}">Loading...</div>
                <div d-show="${this.props._noResults}">No results...</div>
                <div class="search-results">
                    ${this.props.records.map(item => 
                            //language=html
                            h`
                                <${TrackCard} 
                                    artistName="${item.artistName}"
                                    trackName="${item.trackName}"
                                    album="${item.collectionName}"
                                    previewUrl="${item.previewUrl}"
                                    genre="${item.primaryGenreName}"
                                    releaseDate="${item.releaseDate}"
                                    artworkSmall="${item.artworkUrl100.replace('100x100', '300x300')}"
                                    artworkLarge="${item.artworkUrl100.replace('100x100', '1000x1000')}"
                                    artworkMedium="${item.artworkUrl100.replace('100x100', '600x600')}"
                                />
                            `
                    )}
                </div>
            </div>
        `
    }

    search(value) {
        this.props.records = [];
        this.props._isLoading = true;
        this.props._noResults = false;
        let url = `https://itunes.apple.com/search?limit=${this.props.searchLimit}&media=${this.props.searchMediaType}&term=${value.split(' ').join('+')}`
        fetchJsonP(url, {
            jsonpCallback: 'callback',
        })
            .then(response => response.json())
            .then(response => {
                this.props.records = response.results;
                this.props._isLoading = false;
                if (!this.props.records.length)
                    this.props._noResults = true;
                console.log(this.props.records)
            })
            .catch(e => {
                this.props._isLoading = false;
                console.error(e)
            })
    }

    clearSearch() {
        this.props.records = []
    }

};
