var percentage_stock = 0.05;
var boxArea = 1.8;

// exports.getActualArea = function(factArea){
// 	return factArea*(1 + percentage_stock);
// };
//
// exports.getBoxNumber = function(need_area){
// 	return Math.round(need_area/boxArea, 2);
// };

module.exports = function(factArea){
	return {
		getActualArea: function(){
			return factArea*(1 + percentage_stock);
					},
		getBoxNumber: function(need_area){
			return Math.round(need_area/boxArea, 2);
					}
	}
};