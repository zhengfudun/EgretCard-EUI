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
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this) || this;
    }
    MainScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.Group_mbtn.touchEnabled = true;
        this.Group_mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var theBtn = e.target;
            if (theBtn.selected) {
                _this.toggleBtn(theBtn);
            }
            else {
                theBtn.selected = true;
            }
        }, this);
    };
    MainScene.prototype.toggleBtn = function (btn) {
        console.log("切换  " + this.Group_mbtn.numChildren);
        // 先把所有的按钮都设置为不选中
        for (var i = 0; i < this.Group_mbtn.numChildren; i++) {
            var theBtn = this.Group_mbtn.getChildAt(i);
            theBtn.selected = false;
        }
        if (btn === 0) {
            console.log('返回');
            return;
        }
        // 把传进来的btn设置为选中状态
        btn = btn;
        btn.selected = true;
        var index = this.Group_mbtn.getChildIndex(btn);
        console.log("当前选中目标： " + index);
        switch (index) {
            case 0:
                // 调用静态方法切换到玩家场景
                // 把按钮的层级提高	
                // this.numChildren表示所有的子元素数量
                SceneManager.toPlayerScene();
                this.setChildIndex(this.Group_mbtn, this.numChildren);
                break;
            case 1:
                SceneManager.toHeroScene();
                this.setChildIndex(this.Group_mbtn, this.numChildren);
                break;
            case 2:
                SceneManager.toGoodsSene();
                this.setChildIndex(this.Group_mbtn, this.numChildren);
                break;
            case 3:
                SceneManager.toAboutSene();
                this.setChildIndex(this.Group_mbtn, this.numChildren);
            default:
                break;
        }
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainScene.js.map