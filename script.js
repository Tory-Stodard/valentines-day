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
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWY5ZHNoN2dmZ2htd3hkMzRwMjV2cnZ3OWZtNjFkeWNhNTVqNmR2YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KD1D49tK4Hvl6E5q1T/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bXBqMDR2Y3F3ZTN1d3ZybmJheDVzenNhdHB4YjZsc2hmaGEzeWJyNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/c1ChSJSYLbfOFJwDaK/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bXBqMDR2Y3F3ZTN1d3ZybmJheDVzenNhdHB4YjZsc2hmaGEzeWJyNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpQcDH5EfJRwxm03Uh/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aWUzNnpxeXplZHJibmYzNW5rZm1hMW8zaWRxZjZob2huMHM1ZGszbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7WItlB9UjzAQFPiw/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NjlvN3p4ODdocDBvZjlhcDY5aDNrZ3YzOXozcDBiNmV6ZDZnY3BociZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NKmXVFgwd8HKw/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NDlrbTFxbmFxd2JocGxnNHhoZnM1ZG10emh4cHczODRpdGxrOHVlNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JjfjN7HsVr6gfIiYgD/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c2U2c3l0Z3V3bHFwYjJpYWF6eHZwYmwxN3JkY3F4YXR1aWp5cTNpYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SKoWAIC135sSk/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXViNDBheDFsYjVtMjlwMjVzM3VmZzl3d3Q1ejFtdHB5MHp1YW9kYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/F4kMBYgYPv2tWWJvVE/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZTE5ejNrMGd3bzk0aHJkemg3N2JnZ2k4OXhvN2ZzZHE5Nzh5NHYxMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Ug3dOjN0QX0Q1ymtex/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b3pjZWF4NHgyNXUxdTlqNWRnbHRqanRxeWk0cm5hMTlyMGNhbnVkaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT1Ra4pyABtalRncEE/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3azJ4MWJ2aWVwb2pkdnp2ZGxhd282bGp4dXZoaXBxMmhtNXE4ZDducCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l4pT0odMwa6Wsofza/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3azJ4MWJ2aWVwb2pkdnp2ZGxhd282bGp4dXZoaXBxMmhtNXE4ZDducCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9QM16dR8L38XwbzK84/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Y2xyNnFyc2hiaWplaDN1NHg4NXNkNm42ZTd4M2pkOTdra2pmMWF4MyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/aJaP8dcJk4HFphGz7u/giphy.gif',
  ];

  checkTimeout();

  confetti({
    particleCount: 150,
    spread: 50,
    startVelocity: 35,
    colors: ['#ffffff', '#ebc7c7', '#e57272', '#e14545', '#dcc6c6', '#e71414'],
  });

  getRandomGif(gifs);
}

function clickedNo() {
  const gifs = [
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ajV4ZmVieHV4azYzaDMwbnNic3JidHdmcmpkN2RrdDUzZ3VoZjd3ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9uu6VPW4tZbH2/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bTI1eGUyeXBzenVqM2x3djBkbnR2d29mN2kyaGVsaGlxc3l0NDUwYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hLYpV3AHfaBdVKm1WU/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bTI1eGUyeXBzenVqM2x3djBkbnR2d29mN2kyaGVsaGlxc3l0NDUwYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5q2de1tg1SVZ6GG1u9/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXViNDBheDFsYjVtMjlwMjVzM3VmZzl3d3Q1ejFtdHB5MHp1YW9kYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/k6UaUcguCf4ldKCSXC/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXViNDBheDFsYjVtMjlwMjVzM3VmZzl3d3Q1ejFtdHB5MHp1YW9kYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26xBzKsEllzJUcdgI/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZTE5ejNrMGd3bzk0aHJkemg3N2JnZ2k4OXhvN2ZzZHE5Nzh5NHYxMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3rgXBwvjqmHnIU9FTi/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTVqM2ZmdG82Y3A5M3pqbXVyMmZvczFoejh1dmV3Y2hnMG5wb2h1ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eYdbCr6k6ABLTfANYd/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTVqM2ZmdG82Y3A5M3pqbXVyMmZvczFoejh1dmV3Y2hnMG5wb2h1ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bdwApHpCFU9g5IVLqj/giphy.gif',
  ];

  checkTimeout();
  getRandomGif(gifs);
}

function hideImage() {
  gif.classList.add('hidden');
}

function getRandomGif(gifs) {
  let randomGif = Math.floor(Math.random() * gifs.length);
  gif.src = gifs[randomGif];
  gif.classList.remove('hidden');
  timeoutID = setTimeout(hideImage, 3000);
}

function checkTimeout() {
  if (timeoutID) {
    clearTimeout(timeoutID);
  }
}
