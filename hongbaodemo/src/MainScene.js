var MainLayer = cc.Layer.extend({
    sprite:null,
    timeLabel: null,
    timeCount: 10,
    hand: null,
    ctor:function () {
        this._super();

        cc.log("MainScene");

        var size = cc.winSize;

        // 添加背景
        this.addBg(size);

        // 计时器图标及初始内容
        this.addTimeLabel(size);
        this.schedule(this.countDownFun, 1, cc.REPEAT_FOREVER, 0);

        // 手及帧动画
        this.addHand(size);

        // 红包数组

        //

        return true;
    },
    addBg: function(size) { // 添加背景
        var bg = new cc.Sprite(res.Bg_jpg);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);
    },
    addTimeLabel: function(size) { // 添加计时器
        // 倒计时图片
        var countDown = new cc.Sprite(res.CountDown_png);
        countDown.setPosition(size.width*0.7, size.height-countDown.getBoundingBox().height);
        this.addChild(countDown);

        // 时间
        this.timeLabel = new cc.LabelTTF("", "", size.width*0.1);
        this.timeLabel.setPosition(countDown.x+countDown.getBoundingBox().width*0.8, countDown.y);
        this.timeLabel.setString(10);
        this.timeLabel.setColor(cc.color(200, 100, 100));
        this.addChild(this.timeLabel);
    },
    countDownFun: function() { // 定时器函数
        if(this.timeCount == 0) {
            cc.director.runScene(new OverScene());
        } else {
            this.timeCount--;
            this.timeLabel.setString(this.timeCount);
        }
    },
    addHand: function(size) { // 添加手以及帧动画
        // 添加手
        this.hand = new cc.Sprite(res.Hand_1_png);
        this.hand.setPosition(size.width*0.5, this.hand.getBoundingBox().height*0.5);
        this.addChild(this.hand);

        // 添加帧动画
        var animation = new cc.Animation();
        for(let i  = 1; i <= 2; i++) {
            var frameName = res["Hand_"+i+"_png"];
            animation.addSpriteFrameWithFile(frameName);
        }

        animation.setDelayPerUnit(0.15);
        animation.setRestoreOriginalFrame(true);
        var action = cc.animate(animation);
        this.hand.runAction(action.repeatForever());
    }

});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});

