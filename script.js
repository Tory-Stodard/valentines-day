let timeoutID;
const gif = document.querySelector('.gif');

function clickedYes() {
  const gifs = [
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejNieDdycTJtaWs4NXo5NWdudzBjZWVwdjJwaHg0emk4anlpanp3ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NxC8VtyxqhMtpLoEEN/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejNieDdycTJtaWs4NXo5NWdudzBjZWVwdjJwaHg0emk4anlpanp3ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/D9j761FH8SYJLyW9WO/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejNieDdycTJtaWs4NXo5NWdudzBjZWVwdjJwaHg0emk4anlpanp3ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26xBGaIaD7bBYc0sU/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejNieDdycTJtaWs4NXo5NWdudzBjZWVwdjJwaHg0emk4anlpanp3ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Gpqk76tiVKjn2/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejNieDdycTJtaWs4NXo5NWdudzBjZWVwdjJwaHg0emk4anlpanp3ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qKQQUKSSbWBkO2V3KX/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejNieDdycTJtaWs4NXo5NWdudzBjZWVwdjJwaHg0emk4anlpanp3ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0Heg3VJINbkEL94s/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejNieDdycTJtaWs4NXo5NWdudzBjZWVwdjJwaHg0emk4anlpanp3ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26xBBjZ35Q6CMtuI8/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c2Z3M29ud2RqYWR2dWk0cGMyeWpsejAzOTBqajQ1YmJrYjUzY3JhdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26xBzKsEllzJUcdgI/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWY5ZHNoN2dmZ2htd3hkMzRwMjV2cnZ3OWZtNjFkeWNhNTVqNmR2YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KD1D49tK4Hvl6E5q1T/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bXBqMDR2Y3F3ZTN1d3ZybmJheDVzenNhdHB4YjZsc2hmaGEzeWJyNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/c1ChSJSYLbfOFJwDaK/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bXBqMDR2Y3F3ZTN1d3ZybmJheDVzenNhdHB4YjZsc2hmaGEzeWJyNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpQcDH5EfJRwxm03Uh/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aWUzNnpxeXplZHJibmYzNW5rZm1hMW8zaWRxZjZob2huMHM1ZGszbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7WItlB9UjzAQFPiw/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NjlvN3p4ODdocDBvZjlhcDY5aDNrZ3YzOXozcDBiNmV6ZDZnY3BociZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NKmXVFgwd8HKw/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NDlrbTFxbmFxd2JocGxnNHhoZnM1ZG10emh4cHczODRpdGxrOHVlNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JjfjN7HsVr6gfIiYgD/giphy.gif',
  ];

  if (timeoutID) {
    clearTimeout(timeoutID);
  }

  confetti({
    particleCount: 150,
    spread: 50,
    startVelocity: 35,
    colors: ['#ffffff', '#ebc7c7', '#e57272', '#e14545', '#dcc6c6', '#e71414'],
  });

  getRandomGif(gifs);
}

function clickedNo() {
  alert("Yeah, you're not really my type anways. I just felt sorry for you.");
}

function hideImage() {
  gif.classList.add('hidden');
}

function getRandomGif(gifs) {
  let randomGif = Math.floor(Math.random() * gifs.length);
  gif.src = gifs[randomGif];
  gif.classList.remove('hidden');
  timeoutID = setTimeout(hideImage, 2500);
}
