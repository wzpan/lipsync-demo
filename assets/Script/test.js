cc.Class({
    extends: cc.Component,

    properties: {
        audio: cc.AudioSource,
        animClip: cc.Animation
    },

    // use this for initialization
    onLoad: function () {
        let canvas = cc.find('Canvas');
        canvas.on('touchstart', this.play, this);
    },

    play () {
        console.log('thth');
        this.audio.play();
        this.animClip.play();
    }
});
