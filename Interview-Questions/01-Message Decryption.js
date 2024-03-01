Que : Dave needs to decode a message from his friend Bruce. The message contains an encoded string, and Dave needs to find the longest "good" substring within it. A "good" substring follows these rules:

Each character is identical to the previous one.
Each character is either the preceding or following character in the English alphabet.
Given the encoded message, your task is to help Dave find the length of the longest "good" substring.

For example:

Input: "abcef"
Output: 2
  
function messageDecrypt(W) {
    let maxLength = 0;
    let currentLength = 1;

    for (let i = 1; i < W.length; i++) {
        if (W[i] === W[i - 1] || Math.abs(W.charCodeAt(i) - W.charCodeAt(i - 1)) === 1 || Math.abs(W.charCodeAt(i) - W.charCodeAt(i - 1)) === 25) {
            currentLength++;
        } else {
            maxLength = Math.max(maxLength, currentLength);
            currentLength = 1;
        }
    }

    maxLength = Math.max(maxLength, currentLength);
    return maxLength;
}

// Example usage:
const W = "abcef";
console.log(messageDecrypt(W)); // Output: 2
