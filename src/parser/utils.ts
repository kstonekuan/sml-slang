export class LetterGenerator {
    private newLetter: NewLetter
    private letters: string[]

    constructor() {
        this.letters = []
        this.newLetter = new NewLetter()
    }

    generate(): string {
        if (this.letters.length === 0) {
            this.letters.push(this.newLetter.get())
        }
        // remove and return the next available letter
        return this.letters.shift()
    }

    recycle(letter: string) {
        if (!/^[a-z]+$/.test(letter)) {
            throw new Error('Invalid letter to recycle.')
        }
        // add the recycled letter back to the letters array
        this.letters.push(letter)
        this.letters.sort()
    }
}

class NewLetter {
    private alphabet: string
    private index1: number
    private index2: number

    constructor() {
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
        this.index1 = -1
        this.index2 = -1
    }

    get() {
        this.index2++

        // If we've reached the end of the alphabet, reset index2 to 0 and increment index1
        if (this.index2 >= this.alphabet.length) {
            this.index2 = 0
            this.index1++
        }

        // If we've reached the end of the alphabet again, reset both indices to 0
        if (this.index1 >= this.alphabet.length) {
            throw new Error('No more letters available.')
        }

        const letter1 = this.index1 < 0 ? '' : this.alphabet[this.index1]
        const letter2 = this.alphabet[this.index2]
        return letter1 + letter2
    }
}

