let vel = prompt("unesite velicinu");
for (let i = 0; i < vel; i++) {
  let str = "";
  for (let j = 0; j < vel; j++) {
    if (i % 2 == 0) {
      str = str + "#";
      str = str + " ";
    } else if (i % 2 != 0) {
      str = str + " ";
      str = str + "#";
    }
  }
  console.log(str);
}