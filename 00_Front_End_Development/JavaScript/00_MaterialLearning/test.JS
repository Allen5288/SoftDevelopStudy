function checkSign(num) {
    console.log(num);
    return num > 0 ? 'positive'
        : num == 0 ? 'zero'
        : 'negative';
}

checkSign(10);
checkSign(0);
checkSign(-2);