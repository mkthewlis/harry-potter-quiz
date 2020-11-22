export function randomiseQuizQuestions(inputQuestions) {
    let numberOfInputQuestions = inputQuestions.length;
    let numberOfOutputQuestions = 10;
    let randomisedQuestions = [];

    while (numberOfInputQuestions > 0) {
        let randomIndex = Math.floor(Math.random() * numberOfInputQuestions);

        numberOfInputQuestions--;

        let temporaryValue = inputQuestions[randomIndex];
        inputQuestions[randomIndex] = inputQuestions[numberOfInputQuestions];
        inputQuestions[numberOfInputQuestions] = temporaryValue;
      
        randomisedQuestions = inputQuestions;
        randomisedQuestions.splice(numberOfOutputQuestions, 1);
    };
    
    return randomisedQuestions;
};