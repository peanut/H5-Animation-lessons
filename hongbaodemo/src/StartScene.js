var StartLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        // 背景
        var bg = new cc.Sprite(res.KaiShiBeiJing_jpg);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        // logo
        var logo = new cc.Sprite(res.Logo);
        logo.x = size.width / 2;
        logo.y = size.height / 2;
        this.addChild(logo);

        // 按钮菜单
        var btn = new cc.MenuItemImage(res.KaiShiAnNiu_png, res.KaiShiAnNiuB_png, function() {
            cc.director.runScene(new StartScene());
        });
        btn.x = size.width / 2;
        btn.y = size.height / 5;
        btn.scale = 0;
        var scaleMove = cc.scaleTo(1.5, 1, 1);
        btn.runAction(scaleMove);

        var menu = new cc.Menu(btn);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu);


        return true;
    }
});

var StartScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});

