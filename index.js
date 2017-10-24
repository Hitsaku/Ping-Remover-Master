module.exports = function PingRemover(dispatch) {

	function PingRemover()	{
		dispatch.toServer('S_ABNORMALITY_BEGIN', 1);
	}
	
	

    
