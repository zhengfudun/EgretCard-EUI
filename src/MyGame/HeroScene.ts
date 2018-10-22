class HeroScene extends eui.Component implements  eui.UIComponent {

	public mbtn_rtn:eui.Button;
	public mbtn_sure:eui.Button;
	public scr_hero:eui.Scroller;
	public list_hero:eui.List;

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

		// 原始数组
		let dataArr:any[] = [
			{image: 'resource/art/heros_goods/heros01.png', name: '第一', value: '评价: 黑魂很特么厉害, 为所欲为', isSelected: false},
			{image: 'resource/art/heros_goods/heros02.png', name: '第二人', value: '评价: 第五很特么厉害, 为所欲为', isSelected: false},
			{image: 'resource/art/heros_goods/heros03.png', name: '第三', value: '评价: 等等很特么厉害, 为所欲为', isSelected: true},
			{image: 'resource/art/heros_goods/heros04.png', name: '第四', value: '评价: 是多少很特么厉害, 为所欲为', isSelected: false},
			{image: 'resource/art/heros_goods/heros05.png', name: '第五', value: '评价: 都是很特么厉害, 为所欲为', isSelected: false},
			{image: 'resource/art/heros_goods/heros06.png', name: '第六', value: '评价: 高仿很特么厉害, 为所欲为', isSelected: false},
			{image: 'resource/art/heros_goods/heros07.png', name: '第七', value: '评价: 那边很特么厉害, 为所欲为', isSelected: false}
		]
		// 转成eui数据
		let euiArr:eui.ArrayCollection = new eui.ArrayCollection(dataArr)
		// 把list_hero数据源设置成euiArr
		this.list_hero.dataProvider = euiArr
		// 设置list_hero的项呈视器 (这里直接写类名,而不是写实例)
		this.list_hero.itemRenderer = heroList_item

		// 点击返回按钮,回到主场景
		this.mbtn_rtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=>{
			SceneManager.toMainScene()
			SceneManager.instance.mainScene.toggleBtn(0)
		}, this)

		// 点击确定按钮,回到主场景,显示出选择的项
		this.mbtn_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickSelect, this)
	}

	/**
	 * 点击确定按钮
	 */
	onClickSelect(e) {
		SceneManager.toMainScene()
		SceneManager.instance.mainScene.toggleBtn(0)
		// 拿到数据源
		let dataProvider = this.list_hero.dataProvider
		let arr:string[] = []
		// 遍历数据源中所有项
		for(let i = 0; i < dataProvider.length; i ++) {
			let item = dataProvider.getItemAt(i)
			if (item.isSelected) {
				arr.push(item.name)
			}
		}
		SceneManager.showInfo(arr)
	}
}