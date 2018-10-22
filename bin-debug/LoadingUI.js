var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        // 当被添加到舞台的时候触发 (被添加到舞台,说明资源组已经加载完成)
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
        // 背景图
        this.bgImg = new egret.Bitmap();
        this.bgImg.texture = RES.getRes('loading_jpg');
        this.addChild(this.bgImg);
        // loading图标
        this.loadImg = new egret.Bitmap();
        this.loadImg.texture = RES.getRes('loading2_png');
        this.loadImg.anchorOffsetX = this.loadImg.width / 2;
        this.loadImg.anchorOffsetY = this.loadImg.height / 2;
        this.loadImg.x = this.width / 2;
        this.loadImg.y = this.height / 2;
        this.addChild(this.loadImg);
        // 文本
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.width = 480;
        this.textField.height = 20;
        this.textField.y = this.height / 2 - this.textField.height / 2;
        this.textField.size = 14;
        this.textField.textAlign = "center";
        // 监听帧事件,每帧都让loading图片转动
        this.addEventListener(egret.Event.ENTER_FRAME, this.updata, this);
    };
    LoadingUI.prototype.updata = function () {
        // 旋转
        this.loadImg.rotation += 5;
    };
    // 这个函数在加载中会自动调用
    LoadingUI.prototype.onProgress = function (current, total) {
        // 计算百分比
        var per = Math.floor((current / total) * 100);
        this.textField.text = per + "%";
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//# sourceMappingURL=LoadingUI.js.map