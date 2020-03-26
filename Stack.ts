{
    class Stack {
        maxLength: number
        constructor(maxLength: Number) {
            if (typeof (maxLength) !== 'number') {
                throw new Error('Failed to init, max length canbe a number!');
            }
            this.maxLength = maxLength;
        }
    }
}