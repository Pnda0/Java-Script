const texto = "50%"
const nome_da_musica = "Dosed"

const volume = document.getElementById('volume')
const volume_atual = document.getElementById('currentvolume')
const music_name = document.getElementById('music')


volume.value = "50"
volume_atual.textContent = `${volume.value} %`
music_name.textContent = 'Dosed'