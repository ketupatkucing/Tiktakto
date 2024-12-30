const btn = document.querySelectorAll('.btn')
const act = document.querySelector('.btn')

function t(j) {
  btn[j].innerHTML = 'O'
  btn[j].disabled = true
  setTimeout(() => {
    for (z = 0; z < 9; z++) {
      btn[z].disabled = false
    }
  }, 300);
  const tm = setTimeout(check, 300)

}

function check() {
  var rnd = Math.floor(Math.random() * 9)
  if (btn[rnd].innerHTML == 'X') {
    for (k = 0; k < 9; k++) {
      if (btn[k].innerHTML == 'O') {
        btn[k].innerHTML = 'X'
        btn[k].disabled = true
        break
      }

      //console.log(k)

    }

  } else {
    btn[rnd].innerHTML = 'X'
    btn[rnd].disabled = true

  }


  const ck = setTimeout(check2, 300)
  //npc
  function check2() {
    if (
      btn[0].innerHTML == 'O' &&
      btn[1].innerHTML == 'O' &&
      btn[2].innerHTML == 'O') {
      alert('player win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }
    }
    if (
      btn[3].innerHTML == 'O' &&
      btn[4].innerHTML == 'O' &&
      btn[5].innerHTML == 'O') {
      alert('player win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }
    }
    if (
      btn[6].innerHTML == 'O' &&
      btn[7].innerHTML == 'O' &&
      btn[8].innerHTML == 'O') {
      alert('player win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }
    }
    if (
      btn[0].innerHTML == 'O' &&
      btn[3].innerHTML == 'O' &&
      btn[6].innerHTML == 'O') {
      alert('player win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }
    }
    if (
      btn[1].innerHTML == 'O' &&
      btn[4].innerHTML == 'O' &&
      btn[7].innerHTML == 'O') {
      alert('player win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }
    }
    if (
      btn[2].innerHTML == 'O' &&
      btn[5].innerHTML == 'O' &&
      btn[8].innerHTML == 'O') {
      alert('player win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }
    }
    if (
      btn[0].innerHTML == 'O' &&
      btn[4].innerHTML == 'O' &&
      btn[8].innerHTML == 'O') {
      alert('player win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }
    }
    if (
      btn[2].innerHTML == 'O' &&
      btn[4].innerHTML == 'O' &&
      btn[6].innerHTML == 'O') {
      alert('player win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }
    }
    //npc
    if (
      btn[0].innerHTML == 'X' &&
      btn[1].innerHTML == 'X' &&
      btn[2].innerHTML == 'X') {
      alert('npc win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }
    }
    if (
      btn[3].innerHTML == 'X' &&
      btn[4].innerHTML == 'X' &&
      btn[5].innerHTML == 'X') {
      alert('npc win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }
    }
    if (
      btn[6].innerHTML == 'X' &&
      btn[7].innerHTML == 'X' &&
      btn[8].innerHTML == 'X') {
      alert('npc win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }

    }
    if (
      btn[0].innerHTML == 'X' &&
      btn[3].innerHTML == 'X' &&
      btn[6].innerHTML == 'X') {
      alert('npc win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }

    }
    if (
      btn[1].innerHTML == 'X' &&
      btn[4].innerHTML == 'X' &&
      btn[7].innerHTML == 'X') {
      alert('npc win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }

    }
    if (
      btn[2].innerHTML == 'X' &&
      btn[5].innerHTML == 'X' &&
      btn[8].innerHTML == 'X') {
      alert('npc win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }

    }
    if (
      btn[0].innerHTML == 'X' &&
      btn[4].innerHTML == 'X' &&
      btn[8].innerHTML == 'X') {
      alert('npc win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }

    }
    if (
      btn[2].innerHTML == 'X' &&
      btn[4].innerHTML == 'X' &&
      btn[6].innerHTML == 'X') {
      alert('npc win')
      for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
        btn[i].disabled = false
      }
    }
  }
}
