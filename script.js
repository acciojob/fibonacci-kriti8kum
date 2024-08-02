function fibonacci(num) {
// your code here
	if( num == 0){
		return 0;
	} else if(num == 1){
		return 1;
	}

	let prev = 0;
	let curr = 1;
	for( int i <2; i<=num ; i++){
		let next = prev + curr ;
		prev = curr;
		curr = next;
	}
	return prev;
}

module.exports = fibonacci;

