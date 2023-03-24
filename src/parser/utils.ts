export class LetterGenerator {
    private letters: string[];

    constructor() {
        // initialize an array of lowercase letters
        this.letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
    }

    generate(): string {
        if (this.letters.length === 0) {
            throw new Error('No more letters available.');
        }
        // remove and return the next available letter
        return this.letters.shift();
    }

    recycle(letter: string) {
        if (!/^[a-z]$/.test(letter)) {
            throw new Error('Invalid letter to recycle.');
        }
        // add the recycled letter back to the letters array
        this.letters.push(letter);
    }
}
