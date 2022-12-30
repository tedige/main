fetch('myworks.json')
.then((res) => res.json())
.then(data => myWorks(data));

function myWorks({Name, works}){
    document.body.insertAdjacentHTML('afterend', 
    ` <p>${Name}</p>
     <div class="works">${setWorks(works)}</div>
    `)
}

function setWorks(works) {
    return works.map(
        (work) => `<div class="def">
      <p>${work.name}</p>
      <h3>Описание:</h3>
      <ul>
         ${work.opisanie.map(def => `<li>${def}</li>`).join(' ')}
      </ul>
       <img src="${work.img}" class="imgg">
      <br><a class="sait" href="${work.sait}" src="${work.sait}">Сайт</a>
      <br><input type="text">
      <input type="submit" value="Отправить">
      </div>
    `
    )
    .join(' ');
}
