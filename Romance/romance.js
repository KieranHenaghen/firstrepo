let text = "Record scratch; Steve Miller Band Tattooed necks and tattooed hands Oh, how don't you drown in a rain storm? Fresh regrets, vodka sweats The sun is down and we're bound to get Exhausted and so far from the shore You're never gonna get it I'm a hazard to myself I'll break it to you easy This is hell, this is hell You're looking and whispering You think I'm someone else This is hell, yes. Literal hell. We don't have to talk We don't have to dance We don't have to smile We don't have to make friends It's so nice to meet you, Let's never meet again We don't have to talk We don't have to dance We don't have to dance Bottles smash, I raise my hand How can you all even stand it Why is there joy in this poison, oh Faking smiles and confidence Driving miles to capture this excitement I can't take anymore, oh You're never gonna get it I'm a hazard to myself I'll break it to you easy This is hell, this is hell You're looking and whispering You think I'm someone else This is hell, yes. I am in hell. We don't have to talk We don't have to dance We don't have to smile We don't have to make friends It's so nice to meet you, Let's never meet again We don't have to talk We don't have to dance We don't have to dance Yeah yeah, yeah yeah You're never gonna get it I'm a hazard to myself I'll break it to you easy This is hell, this is hell You're looking and whispering You think I'm someone else This is hell, yes. Literal hell. We don't have to talk We don't have to dance We don't have to smile We don't have to make friends It's so nice to meet you, Let's never meet again We don't have to talk We don't have to dance We don't have to dance We don't have to talk We don't have to talk We don't have to dance We don't have to talk, talk, talk We don't have to dance We don't have to talk, talk, talk, talk, talk, talk, talk, talk"

let text2 = "Ever since I left the city, you, you, you You and me we just don't get along";

function parseText(textToParse) {
    let goodText = textToParse.toLowerCase().replace(/[.,;?!']/g, "")
    let textArr = goodText.split(" ")
    // console.log(textArr)
    return textArr
}
parseText(text)


function markovChainGenerator(textString) {
    let wordPairs = {

    };
    let textArray = parseText(textString)
    //console.log(textArray)
    for (let i=0; i<(textArray.length-1); i++) {
        let nextWord = textArray[(i+1)];
        let currentWord = textArray[i]
        if (wordPairs[currentWord]) {
            wordPairs[currentWord].push(nextWord)
        }
        else {
            wordPairs[currentWord] = [nextWord]
        }
    }
    // console.log(wordPairs)
    return wordPairs
}
markovChainGenerator(text)


function randomWordPicker(wordArray) {
    let randomNum = Math.random() * wordArray.length;
    let chosenIndex = Math.floor(randomNum)
    return wordArray[chosenIndex]
}

function writeLine(corpus, n) {
  let parsed = parseText(corpus);
  let chain = markovChainGenerator(corpus);
  let random = randomWordPicker(parsed);
  let line = [random];
  // let previousWord = random;

  while (line) {
    // let newPreviousWord = random
    // // if (line == [parsed[random]]) {
    //   let nextArray = chain[previousWord];
    //   let newRandom = randomWordPicker(nextArray);
    // // } 
    
    // // if (line !== [parsed[random]]) {
    //   // let newPreviousWord = parsed[newRandom];
    //   let newArray = chain[newPreviousWord];
    //   let newRandom = randomWordPicker(newArray);
    //   let newPreviousWord = parsed[newRandom];
    // // }
    let newArray = chain[random];
    
    random = randomWordPicker(newArray);
    

    line.push(random);
    if (line.length == n) {
      break
    }
  }
  let phrase = line.join(" ")
//   console.log(phrase)
  return phrase
}
writeLine(text, 6)


function generatePoem(corpus, lines) {
  while (lines > 0) {
    let l = (Math.floor(Math.random() *10) + 1);
    console.log(writeLine(corpus, l))
    lines -= 1
  }
}
generatePoem(text, 4)