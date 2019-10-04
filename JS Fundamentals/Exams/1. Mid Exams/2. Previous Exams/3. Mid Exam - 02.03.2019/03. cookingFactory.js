function cookingFactory(input) {
    input.pop();
    let bestQualitySum = Number.MIN_SAFE_INTEGER;
    let bestBatch = [];

    for (let i = 0; i < input.length; i++) {
        let currentBatch = input[i].split('#').map(Number);
        let currentQualitySum = currentBatch.reduce((a, b) => a + b);

        if (currentQualitySum > bestQualitySum) {
            bestBatch = currentBatch;
            bestQualitySum = currentQualitySum;
        } else if (currentQualitySum === bestQualitySum) {
            let bestBatchAv = bestQualitySum / bestBatch.length;
            let currentBatchAv = currentQualitySum / currentBatch.length;
            if (currentBatchAv > bestBatchAv
                || (currentBatchAv === bestBatchAv && currentBatch.length < bestBatch.length)) {
                bestBatch = currentBatch;
            }
        }
    }
    
    console.log(`Best Batch quality: ${bestQualitySum}`);
    console.log(bestBatch.join(' '));
}

//cookingFactory(['5#4#10#-2', '10#5#2#3#2', 'Bake It!'])
cookingFactory([ '5#3#2', '10#2#-2#1#-1', '4#2#1', 'Bake It!' ])