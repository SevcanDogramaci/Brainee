const MAX_NUMBER = 100

class QuestionService {
    static operators = ['+', '-', '*']
    static max_number = MAX_NUMBER

    static #getRandomOperator() {
        const operatorCount = this.operators.length
        const randomOperatorIndex = Math.floor(Math.random() * operatorCount)
        return this.operators[randomOperatorIndex]
    }

    static #generateRandomNumberBtwRangeInc(min=0, max=this.max_number) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
      
    static generateQuestion() {
        const operand1 = this.#generateRandomNumberBtwRangeInc()
        const operand2 = this.#generateRandomNumberBtwRangeInc()
        const operator = this.#getRandomOperator()

        const question = `${operand1} ${operator} ${operand2}`
        const correctAnswer = eval(question)
        
        return {
            question,
            correctAnswer
        }
    }
}

export default QuestionService;