jsOne={
	// 数组去重
	removeRepeatArrOne(arr){
		return arr.filter((value,index,arr)=>arr.indexOf(value)===index )
	},
	removeRepeatArrTwo(arr){
		return [...new Set(arr)]
	},
	// 两个数内的随机数
	randomNumber(n1,n2){
		return parseInt(Math.random()*(n1+1-n2)+n2)
	},
	
	
	
	






}