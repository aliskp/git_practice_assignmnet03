function checkprime(num)
{
	let count=0;
	for(let i=1; i<=num; i++)
	{
		if(num%2 !=0)
		{
			count++
		}
	}
	if(count ==2){
		return true;
	}
	else
	{
		return false;
	}
}


let ans=checkprime(11);

console.log("ans");