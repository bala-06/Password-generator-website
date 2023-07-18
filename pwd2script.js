function generatePassword(complexity) {
    var length = parseInt(document.getElementById('length').value);
    if (isNaN(length) || length < 8 || length > 32) {
      if (complexity === 'simple') {
        length = 8;
      } else if (complexity === 'medium') {
        length = 10;
      } else if (complexity === 'hard') {
        length = 12;
      } else {
        alert('Password length must be between 8 and 32 characters.');
        return;
      }
    }
    var uppercaseCount = parseInt(document.getElementById('uppercaseCount').value) || 0;
    var lowercaseCount = parseInt(document.getElementById('lowercaseCount').value) || 0;
    var numberCount = parseInt(document.getElementById('numberCount').value) || 0;
    var symbolCount = parseInt(document.getElementById('symbolCount').value) || 0;

    if (uppercaseCount + lowercaseCount + numberCount + symbolCount > length) {
      alert('The total count exceeds the password length. Please adjust the count values.');
      return;
    }
    var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var numberChars = '0123456789';
    var symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    var characters = '';
    if (complexity === 'simple') {
      characters = lowercaseChars;
    } else if (complexity === 'medium') {
      characters = uppercaseChars + lowercaseChars + numberChars + symbolChars;
    } else if (complexity === 'hard') {
      characters = uppercaseChars + lowercaseChars + numberChars + symbolChars;
    }
    var password = '';
    for (var i = 0; i < uppercaseCount; i++) {
      password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
    }

    for (var i = 0; i < lowercaseCount; i++) {
      password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
    }

    for (var i = 0; i < numberCount; i++) {
      password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
    }

    for (var i = 0; i < symbolCount; i++) {
      password += symbolChars.charAt(Math.floor(Math.random() * symbolChars.length));
    }

    var remainingLength = length - (uppercaseCount + lowercaseCount + numberCount + symbolCount);
    for (var i = 0; i < remainingLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    var shuffledPassword = shuffle(password.split('')).join('');
    var totalCombinations = Math.pow(characters.length, length);
    document.getElementById('password').value = shuffledPassword;
    }
  function copyPassword() {
    var password = document.getElementById('password');
    password.select();
    password.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.getElementById('copy-message').innerText = 'Password copied to clipboard!';
  }
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }