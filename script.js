function clickedYes() {
  confetti({
    particleCount: 150,
    spread: 50,
    startVelocity: 35,
    colors: ['#ffffff', '#ebc7c7', '#e57272', '#e14545', '#dcc6c6', '#e71414'],
  });
}

function clickedNo() {
  alert("Yeah, you're not really my type anyways.");
}
