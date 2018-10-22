class MainScene extends eui.Component implements  eui.UIComponent {


	public Group_mbtn:eui.Group;
	public mbtnPlayer:eui.ToggleButton;
	public mbtnHero:eui.ToggleButton;
	public mbtnGoods:eui.ToggleButton;
	public mbtnAbout:eui.ToggleButton;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();

		this.Group_mbtn.touchEnabled = true;

		this.Group_mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=> {

			let theBtn = <eui.ToggleButton>e.target;
			if (theBtn.selected) {
				this.toggleBtn(theBtn);
			} else {
				theBtn.selected = true;
			}}, this);
	}

	public toggleBtn(btn:eui.ToggleButton | number) {
		console.log("切换  "+ this.Group_mbtn.numChildren);
		// 先把所有的按钮都设置为不选中
		for (let i = 0; i < this.Group_mbtn.numChildren; i++) {
			let theBtn = <eui.ToggleButton>this.Group_mbtn.getChildAt(i);
			theBtn.selected = false;
		}
		if(btn===0){
			console.log('返回');
			return;
		}
		// 把传进来的btn设置为选中状态
		btn = <eui.ToggleButton>btn;
		btn.selected = true;

		let index = this.Group_mbtn.getChildIndex(<eui.ToggleButton>btn);
		console.log("当前选中目标： "+index);
		switch (index) {
			case 0:
				// 调用静态方法切换到玩家场景
				// 把按钮的层级提高	
				// this.numChildren表示所有的子元素数量
				SceneManager.toPlayerScene()
				this.setChildIndex(this.Group_mbtn, this.numChildren)
				break
			case 1:
				SceneManager.toHeroScene()
				this.setChildIndex(this.Group_mbtn, this.numChildren)
				break
			case 2:
				SceneManager.toGoodsSene()
				this.setChildIndex(this.Group_mbtn, this.numChildren)
				break
			case 3:
				SceneManager.toAboutSene()
				this.setChildIndex(this.Group_mbtn, this.numChildren)
			default:
				break
		}
	}	
}