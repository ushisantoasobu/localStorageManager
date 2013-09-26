this.lsManager = this.lsManager || {};


(function(){

	//localstorageの機能があるかの判定をする
	//ないときどうする？？

	var m = {};

	/**
	 * explanation
	 * 
	 * @param explanation
	 * @return explanation
	 */
	m.hasLocalStorage = function(){
		//
	};

	/**
	 * データを設定する
	 * @param key
	 * @param value
	 */
	m.setData = function(key, value){
		if(typeof value === "object"){
			localStorage.setItem(key, JSON.stringify(value));
		}else{
			localStorage.setItem(key, value);
		}
	};

	/**
	 * 画像を設定する
	 * @param key
	 * @param value
	 */
	m.setImage = function(key, value){
		var canvas = document.createElement("canvas"); 
		var ctx = canvas.getContext("2d");
		ctx.drawImage(value, 0, 0); 
		localStorage.setItem(key, canvas.toDataURL());
	};

	/**
	 * データを取得する
	 * @param key
	 * @return data 
	 */
	m.getData = function(key){
		var value = localStorage.getItem(key);
		return JSON.parse(value);
	};

	/**
	 * 画像を設定する
	 * @param key
	 * @param value
	 */
	m.getImage = function(key, value){
		return localStorage.getItem(key);
	};

	/**
	 * すべてのデータを返す
	 * @return arr
	 */
	m.getAllData = function(){
		var arr = []
		for(var i = 0; i < localStorage.length; i++){
			var value = localStorage.key(0);
			arr.push(JSON.parse(value));
		}
		return arr;
	};

	/**
	 * データを削除する
	 * @param key
	 */
	m.removeData = function(key){
		localStorage.removeItem(key);
	};

	/**
	 * explanation
	 * 
	 * @param 
	 * @param 
	 * @return 
	 */
	m.removeAllData = function(){
		localStorage.clear();
	};

	this.lsManager = m;

})();