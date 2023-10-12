async function bake(degrees) {
	var params0 = degrees;
	const params1 = { number1: params0 }
    
    
	const sum = await Parse.Cloud.run('refrigerator', params1);
   
}
bake(350);
