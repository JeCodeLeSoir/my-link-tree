import * as React from 'react';
import './Button.css';
export default class Button extends React.Component {

    GetLink(_) {
        // this.props.type
        switch (this.props.type) {
            case "instagram":
                return "https://www.instagram.com/" + _;
            case "facebook":
                return "https://www.facebook.com/" + _;
            case "twitter":
                return "https://www.twitter.com/" + _;
            case "linkedin":
                return "https://www.linkedin.com/in/" + _;
            case "youtube":
                return "https://www.youtube.com/" + _;
            case "github":
                return "https://www.github.com/" + _;
            case "reddit":
                return "https://www.reddit.com/user/" + _;
            case "twitch":
                return "https://www.twitch.tv/" + _;
            case "tikTok":
                return "https://www.tiktok.com/" + _;
            case "snapchat":
                return "https://www.snapchat.com/add/" + _;
            case "pinterest":
                return "https://www.pinterest.com/" + _;
            case "spotify":
                return "https://www.spotify.com/" + _;
            case "soundcloud":
                return "https://www.soundcloud.com/" + _;
            case "medium":
                return "https://www.medium.com/" + _;
            case "quora":
                return "https://www.quora.com/profile/" + _;
            case "vimeo":
                return "https://www.vimeo.com/" + _;
            case "dribbble":
                return "https://www.dribbble.com/" + _;
            case "behance":
                return "https://www.behance.net/" + _;
            case "deviantart":
                return "https://www.deviantart.com/" + _;
            case "flickr":
                return "https://www.flickr.com/" + _;
            default:
                return "https://www.google.com/search?q=" + _;
        }
    }

    GetIcon() {
        switch (this.props.type) {
            case "instagram":
                return "https://img.icons8.com/color/48/ffffff/instagram-new.png";
            case "facebook":
                return "https://img.icons8.com/color/48/ffffff/facebook-new.png";
            case "twitter":
                return "https://img.icons8.com/color/48/ffffff/twitter.png";
            case "linkedin":
                return "https://img.icons8.com/color/48/ffffff/linkedin.png";
            case "youtube":
                return "https://img.icons8.com/color/48/ffffff/youtube-play.png";
            case "github":
                return "https://img.icons8.com/color/48/ffffff/github.png";
            case "reddit":
                return "https://img.icons8.com/color/48/ffffff/reddit.png";
            case "twitch":
                return "https://img.icons8.com/color/48/ffffff/twitch.png";
            case "tikTok":
                return "https://img.icons8.com/color/48/ffffff/tiktok.png";
            case "snapchat":
                return "https://img.icons8.com/color/48/ffffff/snapchat.png";
            case "pinterest":
                return "https://img.icons8.com/color/48/ffffff/pinterest.png";
            case "spotify":
                return "https://img.icons8.com/color/48/ffffff/spotify.png";
            case "soundcloud":
                return "https://img.icons8.com/color/48/ffffff/soundcloud.png";
            case "medium":
                return "https://img.icons8.com/color/48/ffffff/medium-monogram.png";
            case "quora":
                return "https://img.icons8.com/color/48/ffffff/quora.png";
            case "vimeo":
                return "https://img.icons8.com/color/48/ffffff/vimeo.png";
            case "dribbble":
                return "https://img.icons8.com/color/48/ffffff/dribbble.png";
            case "behance":
                return "https://img.icons8.com/color/48/ffffff/behance.png";
            case "deviantart":
                return "https://img.icons8.com/color/48/ffffff/deviantart.png";
            case "flickr":
                return "https://img.icons8.com/color/48/ffffff/flickr.png";
            default:
                return "https://img.icons8.com/color/48/ffffff/instagram-new.png";
        }
    }

    render() {
        return (
            <div className={"Button " + this.props.type}>
                <img src={this.GetIcon()} alt={this.props.type} />
                <a href={this.GetLink(this.props._)} >
                    {this.props.type}
                </a>
            </div>
        );
    }
}