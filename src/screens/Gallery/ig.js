import React from "react";
import ImageGallery from "react-image-gallery";
import { GetString, isRTL } from "../../lang/lang";
import { EnumStringKeys } from "../../lang/stringKeys";
import "react-image-gallery/styles/css/image-gallery.css";
import "../../Styles/ig.css";

class Ig extends React.Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: isRTL,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: "bottom",
      showVideo: {},
      useWindowKeyDown: true,
    };

    this.images = [
      {
        original: require("../../assets/images/Gallery/Tongariki.jpg"),
        thumbnail: require("../../assets/images/Gallery/Tongariki_t.jpg"),
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
        description: GetString(EnumStringKeys.Gallery_AhuTongariki),
      },
      {
        original: require("../../assets/images/Gallery/LondonTunnel.jpg"),
        thumbnail: require("../../assets/images/Gallery/LondonTunnel_t.jpg"),
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
        description: GetString(EnumStringKeys.Gallery_LondonLightTunnel),
      },
      {
        original: require("../../assets/images/Gallery/Vienna.jpg"),
        thumbnail: require("../../assets/images/Gallery/Vienna_t.jpg"),
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
        description: GetString(EnumStringKeys.Gallery_ViennaChristmasMarket),
      },
      {
        original: require("../../assets/images/Gallery/LondonTube.jpg"),
        thumbnail: require("../../assets/images/Gallery/LondonTube_t.jpg"),
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
        description: GetString(EnumStringKeys.Gallery_LondonTubeTunnel),
      },
      {
        original: require("../../assets/images/Gallery/Meteora.jpg"),
        thumbnail: require("../../assets/images/Gallery/Meteora_t.jpg"),
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
        description: GetString(EnumStringKeys.Gallery_MeteoraLightning),
      },
      {
        original: require("../../assets/images/Gallery/LightHouse.jpg"),
        thumbnail: require("../../assets/images/Gallery/LightHouse_t.jpg"),
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
        description: GetString(EnumStringKeys.Gallery_TrwynDuLighthouse),
      },
      {
        original: require("../../assets/images/Gallery/BigBen.jpg"),
        thumbnail: require("../../assets/images/Gallery/BigBen_t.jpg"),
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
        description: GetString(EnumStringKeys.Gallery_BigBen),
      },
      {
        original: require("../../assets/images/Gallery/Jump.jpg"),
        thumbnail: require("../../assets/images/Gallery/Jump_t.jpg"),
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
        description: GetString(EnumStringKeys.Gallery_Jump),
      },
      {
        original: require("../../assets/images/Gallery/BachBach.jpg"),
        thumbnail: require("../../assets/images/Gallery/BachBach_t.jpg"),
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
        description: GetString(EnumStringKeys.Gallery_BachBach),
      },
      {
        original: require("../../assets/images/Gallery/Train.jpg"),
        thumbnail: require("../../assets/images/Gallery/Train_t.jpg"),
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
        description: GetString(EnumStringKeys.Gallery_Train),
      },
      {
        original: require("../../assets/images/Gallery/HaifaLightning.jpg"),
        thumbnail: require("../../assets/images/Gallery/HaifaLightning_t.jpg"),
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
        description: GetString(EnumStringKeys.Gallery_HaifaLightning),
      },
      {
        original: require("../../assets/images/Gallery/LaPlagne.jpg"),
        thumbnail: require("../../assets/images/Gallery/LaPlagne_t.jpg"),
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
        description: GetString(EnumStringKeys.Gallery_LaPlagne),
      },
      {
        original: require("../../assets/images/Gallery/Anemones.jpg"),
        thumbnail: require("../../assets/images/Gallery/Anemones_t.jpg"),
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
        description: GetString(EnumStringKeys.Gallery_Anemones),
      },
    ];
  }

  _onImageClick(event) {
    console.debug(
      "clicked on image",
      event.target,
      "at index",
      this._imageGallery.getCurrentIndex()
    );
  }

  _onImageLoad(event) {
    console.debug("loaded image", event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    console.debug("slid to index", index);
  }

  _onPause(index) {
    console.debug("paused on index", index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug("isFullScreen?", !!fullScreenElement);
  }

  _onPlay(index) {
    console.debug("playing from index", index);
  }

  _handleInputChange(state, event) {
    if (event.target.value > 0) {
      this.setState({ [state]: event.target.value });
    }
  }

  _handleCheckboxChange(state, event) {
    this.setState({ [state]: event.target.checked });
  }

  _handleThumbnailPositionChange(event) {
    this.setState({ thumbnailPosition: event.target.value });
  }

  _resetVideo() {
    this.setState({ showVideo: {} });

    if (this.state.showPlayButton) {
      this.setState({ showGalleryPlayButton: true });
    }

    if (this.state.showFullscreenButton) {
      this.setState({ showGalleryFullscreenButton: true });
    }
  }

  _toggleShowVideo(url) {
    const showVideo = this.state;
    this.setState({
      showVideo: {
        ...showVideo,
        [url]: !showVideo[url],
      },
    });

    if (!showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({ showGalleryPlayButton: false });
      }

      if (this.state.showFullscreenButton) {
        this.setState({ showGalleryFullscreenButton: false });
      }
    }
  }

  render() {
    return (
      <ImageGallery
        ref={(i) => (this._imageGallery = i)}
        items={this.images}
        onClick={this._onImageClick.bind(this)}
        onImageLoad={this._onImageLoad}
        onSlide={this._onSlide.bind(this)}
        onPause={this._onPause.bind(this)}
        onScreenChange={this._onScreenChange.bind(this)}
        onPlay={this._onPlay.bind(this)}
        infinite={this.state.infinite}
        showBullets={this.state.showBullets}
        showFullscreenButton={
          this.state.showFullscreenButton &&
          this.state.showGalleryFullscreenButton
        }
        showPlayButton={
          this.state.showPlayButton && this.state.showGalleryPlayButton
        }
        showThumbnails={this.state.showThumbnails}
        showIndex={this.state.showIndex}
        showNav={this.state.showNav}
        isRTL={this.state.isRTL}
        thumbnailPosition={this.state.thumbnailPosition}
        slideDuration={parseInt(this.state.slideDuration)}
        slideInterval={parseInt(this.state.slideInterval)}
        slideOnThumbnailOver={this.state.slideOnThumbnailOver}
        additionalClass="ig-image-gallery"
        useWindowKeyDown={this.state.useWindowKeyDown}
      />
    );
  }
}

export default Ig;
