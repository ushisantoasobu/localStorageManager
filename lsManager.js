this.lsManager = this.lsManager || {};

(function(){

	var m = {};

	/**
	 * ローカルストレージの機構をもっているか返す
	 * @return boolean
	 */
	m.hasLocalStorage = function() {
		try {
			return window.localStorage;
		} catch (error) {
			return {};
		}
	};

	/**
	 * キーとデータをセットする
	 * @param key
	 * @param value
	 */
	m.setData = function(key, value) {
		try {
			if (typeof value === "object") {
				window.localStorage.setItem(key, JSON.stringify(value));
			} else {
				window.localStorage.setItem(key, value);
			}
		} catch (error) {
			//
		}
	};

	/**
	 * キーと画像をセットする
	 * @param key
	 * @param value
	 */
	m.setImage = function(key, value) {
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		ctx.drawImage(value, 0, 0);
		try {
			window.localStorage.setItem(key, canvas.toDataURL());
		} catch (error) {
			//
		}
	};

	/**
	 * キーをもとにデータを返す
	 * @param key
	 * @return data 
	 */
	m.getData = function(key) {
		try {
			var value = window.localStorage.getItem(key);

			if(typeof value !== "string"){
				return value;
			}

			try{
				return JSON.parse(value);
			}catch(error){
				return value;
			}
		} catch (error) {
			return null;
		}
	};

	/**
	 * キーをもとに画像を返す
	 * @param key
	 * @return image
	 */
	m.getImage = function(key) {
		try {
			return window.localStorage.getItem(key);
		} catch (error) {
			return null;
		}
	};

	/**
	 * すべてのデータを返す
	 * @return arr
	 */
	m.getAllData = function() {
		try {
			var arr = [];
			for (var i = 0; i < window.localStorage.length; i++) {
				var value = window.localStorage.key(0);
				arr.push(JSON.parse(value));
			}
			return arr;
		} catch (error) {
			return null
		}
	};

	/**
	 * 特定のキーのデータを削除する
	 * @param key
	 */
	m.removeData = function(key) {
		try {
			window.localStorage.removeItem(key);
		} catch (error) {
			//
		}
	};

	/**
	 * すべてのデータを削除する
	 */
	m.removeAllData = function() {
		try {
			window.localStorage.clear();
		} catch (error) {
			//
		}
	};

	this.lsManager = m;

})();