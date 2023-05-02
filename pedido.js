const alterView = () => {
  if(document.getElementById('nome').value != ""){
    document.getElementById('ingredients-list').style.display='none';
    document.getElementById('button').style.display='none'
    document.getElementById('realized').style.display='flex'
    document.getElementById('nomeRequest').style.display ="none"
  }
}
